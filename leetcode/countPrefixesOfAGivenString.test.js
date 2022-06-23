const res = require("./countPrefixesOfAGivenString");

describe("Leetcode problem#2341: Count Prefixes of a Given String", () => {
  test("words = ['a','b','c','ab','bc','abc'], s = 'abc' -> 3", () => {
    expect(res(["a", "b", "c", "ab", "bc", "abc"], "abc")).toEqual(3);
  });

  test("words = ['a','a'], s = 'aa' -> 2", () => {
    expect(res(["a", "a"], "aa")).toEqual(2);
  });
});
