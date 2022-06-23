var isValid = function (s) {
  const pairs = { "(": ")", "{": "}", "[": "]" };
  const res = s.split("");
  const stack = [];

  if (res.length === 0 || res.length === 1) {
    return false;
  }

  for (let i = 0; i < res.length; i++) {
    if (Object.keys(pairs).includes(res[i])) {
      stack.push(pairs[res[i]]);
    } else {
      const top = stack.pop();
      if (top !== res[i]) {
        return false;
      }
    }
  }
  return stack.length !== 0 ? false : true;
};

module.exports = isValid;
