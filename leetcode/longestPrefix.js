var longestCommonPrefix = function (strs) {
  if (!strs.every((e) => e) || strs.length === 0) {
    return "";
  } else if (strs.length === 1) {
    return strs[0];
  }

  let c = strs.reduce((a, b) => (a.length <= b.length ? a : b)).length;
  let ans = [];

  for (let i = 0; i < c; i++) {
    let trues = [];

    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] === strs[j + 1][i]) {
        trues.push(true);
      } else {
        trues.push(false);
      }
    }

    if (trues.every((e) => e)) {
      ans.push(strs[0][i]);
      continue;
    } else {
      return ans.join("");
    }
  }
  return ans.join("");
};

module.exports = longestCommonPrefix;
