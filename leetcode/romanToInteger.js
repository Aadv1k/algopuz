/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const target = s.trim().split("");

  const dict = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000, };
  const special = { I: ["V", "X"], X: ["L", "C"], C: ["D", "M"]};
  const stack = [];

  for (let i = 0; i < target.length; i++) {
    if (
      Object.keys(special).includes(target[i - 1]) &&
      special[target[i - 1]].includes(target[i])
    ) {
      stack.pop();
      stack.push(dict[target[i]] - dict[target[i - 1]])
    } else {
      stack.push(dict[target[i]]);
    }
  }
  return stack.reduce((e, i) => e + i);
};

module.exports = romanToInt;
