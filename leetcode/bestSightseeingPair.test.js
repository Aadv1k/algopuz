const res = require("./bestSightseeingPair");

describe("Leetcode problem#1063: Best Sightseeing Pair", () => {
  test("values = [8,1,5,2,6] -> 11", () => {
    expect(res((values = [8, 1, 5, 2, 6]))).toEqual(11);
  });

  test("values = [1,2] -> 2", () => {
    expect(res((values = [1, 2]))).toEqual(2);
  });
});
