const rti = require("./romanToInt");

describe("LeetCode 13. Roman to Int", () => {
  test("III -> 3", () => {
    expect(rti("III")).toBe(3);
  });

  test("LVIII -> 58", () => {
    expect(rti("LVIII")).toBe(58);
  });

  test("MCMXCIV -> 1994", () => {
    expect(rti("MCMXCIV")).toBe(1994);
  });
});
