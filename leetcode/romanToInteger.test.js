const res = require("./romanToInteger");

describe("Leetcode problem#13: Roman to Integer", () => {
  test("s = 'III' -> 3", () => {
    expect(res("III")).toEqual(3);
  });

  test("s = 'LVIII' -> 58", () => {
    expect(res("LVIII")).toEqual(58);
  });

  test("s = 'MCMXCIV' -> 1994", () => {
    expect(res("MCMXCIV")).toEqual(1994);
  });
});
