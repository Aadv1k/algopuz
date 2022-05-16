const m = require("./longestPrefix");

describe("LeetCode 14. Longest common prefix ", () => {
  test("[flower,flow,flight] -> fl", () => {
    expect(m(["flower", "flow", "flight"])).toEqual("fl");
  });

  test("[dog,racecar,car] -> fl", () => {
    expect(m(["dog", "racecar", "car"])).toEqual("");
  });

  test('[] -> ""', () => {
    expect(m([])).toEqual("");
  });

  test("[ci,ci] -> c", () => {
    expect(m(["ci", "ci"])).toEqual("ci");
  });
});
