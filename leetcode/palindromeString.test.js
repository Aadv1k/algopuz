const ps = require("./palindromeString");

describe("LeetCode 9. Palindrome Number", () => {
  test("121 -> true", () => {
    expect(ps("121")).toBe(true);
  });

  test("-121 -> false", () => {
    expect(ps("-121")).toBe(false);
  });

  test("10 -> false", () => {
    expect(ps("10")).toBe(false);
  });
});
