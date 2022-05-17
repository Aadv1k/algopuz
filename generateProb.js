const axios = require("axios");
const cheerio = require("cheerio");
const { writeFileSync } = require("fs");
const path = require("path");
const srcPath = "leetcode/";

async function getQuestion(title) {
  const payload = {
    query:
      "query getQuestionDetail($titleSlug: String!) { isCurrentUserAuthenticated question(titleSlug: $titleSlug) {  questionId  questionFrontendId  questionTitle  translatedTitle  questionTitleSlug  content  translatedContent  difficulty  stats  allowDiscuss  contributors {   username   profileUrl   __typename  }  similarQuestions  mysqlSchemas  randomQuestionUrl  sessionId  categoryTitle  submitUrl  interpretUrl  codeDefinition  sampleTestCase  enableTestMode  metaData  enableRunCode  enableSubmit  judgerAvailable  infoVerified  envInfo  urlManager  article  questionDetailUrl  libraryUrl  adminUrl  companyTags {   name   slug   translatedName   __typename  }  companyTagStats  topicTags {   name   slug   translatedName   __typename  }  __typename } interviewed {  interviewedUrl  companies {   id   name   slug   __typename  }  timeOptions {   id   name   __typename  }  stageOptions {   id   name   __typename  }  __typename } subscribeUrl isPremium loginUrl}",
    variables: { titleSlug: title },
  };
  const url = "https://leetcode.com/graphql";
  const headers = { "content-type": "application/json" };

  let res = await axios.post(url, payload, headers);

  let que = res.data["data"]["question"];
  let content = cheerio.load(que.content);

  return {
    id: que.questionId,
    title: que.questionTitle,
    titleUrl: que.questionTitleSlug,
    content: content.text(),
    codeDefinition: que.codeDefinition,

    input: content("pre")
      .text()
      .split("\n")
      .filter((e) => e.trim().includes("Input"))
      .map((e) => e.split(":")[1].trim())
      .map((e) => e.replace(/"/g, "'")),

    output: content("pre")
      .text()
      .split("\n")
      .filter((e) => e.trim().includes("Output"))
      .map((e) => e.split(":")[1].trim())
      .map((e) => e.replace(/"/g, "'")),

    stats: que.stats,
  };
}

const ARGSIZE = 2;
const args = process.argv;
let parsedArgs = args
  .slice(ARGSIZE, args.length)
  .map((e) => e[0].toLowerCase() + e.slice(1))
  .join("-");

if (args.length <= ARGSIZE) {
  console.log("Not enough arguments!, problem name required (dash-case).");
  process.exit(1);
  // process.exitCode = 1;
  // ^- This doesn't work the way I want it to.
}

getQuestion(parsedArgs)
  .then((data) => {
    let probName = `problem${data["id"]}-${data["titleUrl"]}`;

    console.log(`[SUCCESS] Found leetcode ${probName}`);

    writeFileSync(
      path.join(__dirname, srcPath, `${probName}.txt`),
      data["content"]
    );

    let probs = data["input"].map((e, i) => [e, data["output"][i]]);
    let camelName = data["titleUrl"]
      .split("-")
      .map((elem, i) => {
        if (i === 0) {
          return elem;
        }
        return `${elem[0].toUpperCase()}${elem.slice(1)}`;
      })
      .join("");

    // Generate tests
    let testFileTests = probs
      .map((prob) => {
        return `test("${prob[0]} -> ${prob[1]}", () => {\n  expect(res(${prob[0]})).toEqual(${prob[1]}); \n});`;
      })
      .join("\n\n");
    let testFileContent = `const res = require('./${camelName}');\n\ndescribe('Leetcode problem#${data["id"]}: ${data["title"]}', () => {\n${testFileTests}\n});`;

    console.log(`Writing tests...`);

    // Write tests to the file
    writeFileSync(
      path.join(__dirname, srcPath, `${camelName}.test.js`),
      testFileContent
    );

    console.log(`Writing source...`);
    let sourceFileContent = JSON.parse(data["codeDefinition"]).find(
      (e) => e["value"] === "javascript"
    );
    writeFileSync(
      path.join(__dirname, srcPath, `${camelName}.js`),
      sourceFileContent["defaultCode"]
    );
  })
  .catch((err) => console.error(err));
