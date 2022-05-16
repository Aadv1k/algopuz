const run = require("./validParentheses");

describe("LeetCode 20. Valid parentheses", () => {
  test("() -> true", () => {
    expect(run("()")).toBe(true);
  });

  test("()[]{} -> true", () => {
    expect(run("()[]{}")).toBe(true);
  });

  test("(] -> false", () => {
    expect(run("(]")).toBe(false);
  });
});
