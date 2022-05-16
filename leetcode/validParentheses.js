var isValid = function (s) {
  const pairs = { "(": ")", "{": "}", "[": "]" };
  let res = s.split("");
  let stack = [];

  if (res.length === 0 || res.length === 1) {
    return false;
  }

  for (let i = 0; i < res.length; i++) {
    if (Object.keys(pairs).includes(res[i])) {
      stack.push(pairs[res[i]]);
    } else {
      let top = stack.pop();
      if (top !== res[i]) {
        return false;
      }
    }
  }
  return stack.length !== 0 ? false : true;
};

module.exports = isValid;
