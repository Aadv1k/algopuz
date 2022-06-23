const res = require("./longestCommonPrefix");

describe("Leetcode problem#14: Longest Common Prefix", () => {
  test("strs = ['flower','flow','flight'] -> 'fl'", () => {
    expect(res(["flower", "flow", "flight"])).toEqual("fl");
  });

  test("strs = ['dog','racecar','car'] -> ''", () => {
    expect(res(["dog", "racecar", "car"])).toEqual("");
  });
});
