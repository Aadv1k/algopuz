const res = require("./romanToInteger");

describe("Leetcode problem#13: Roman to Integer", () => {
  test("s = 'III' -> 3", () => {
    expect(res((s = "III"))).toEqual(3);
  });

  test("s = 'LVIII' -> 58", () => {
    expect(res((s = "LVIII"))).toEqual(58);
  });

  test("s = 'MCMXCIV' -> 1994", () => {
    expect(res((s = "MCMXCIV"))).toEqual(1994);
  });
});
