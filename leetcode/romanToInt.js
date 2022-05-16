var romanToInt = function (s) {
  let d = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 },
    special = { I: ["V", "X"], X: ["L", "C"], C: ["D", "M"] },
    res = s.trim().split(""),
    n = [];

  for (let i = 0; i < res.length; i++) {
    if (Object.keys(special).includes(res[i])) {
      if (special[res[i]].includes(res[i + 1])) {
        n.push(
          d[special[res[i]][special[res[i]].indexOf(res[i + 1])]] - d[res[i]]
        );
        i++;
        continue;
      }
      n.push(d[res[i]]);
    } else {
      n.push(d[res[i]]);
    }
  }
  return n.reduce((a, b) => a + b);
};

module.exports = romanToInt;
