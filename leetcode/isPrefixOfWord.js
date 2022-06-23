/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  const i = sentence.split(" ").findIndex(e => e.startsWith(searchWord)) + 1;
  return i ? i : -1;
};

module.exports = isPrefixOfWord;
