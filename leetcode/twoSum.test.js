const res = require("./twoSum");

describe("Leetcode problem#1: Two Sum", () => {
  test("nums = [2,7,11,15], target = 9 -> [0,1]", () => {
    expect(res((nums = [2, 7, 11, 15]), (target = 9))).toEqual([0, 1]);
  });

  test("nums = [3,2,4], target = 6 -> [1,2]", () => {
    expect(res((nums = [3, 2, 4]), (target = 6))).toEqual([1, 2]);
  });

  test("nums = [3,3], target = 6 -> [0,1]", () => {
    expect(res((nums = [3, 3]), (target = 6))).toEqual([0, 1]);
  });
});
