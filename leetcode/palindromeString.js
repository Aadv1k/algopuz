var isPalindrome = function (x) {
  return x
    .toString()
    .split("")
    .reverse()
    .reduce((a, b) => a + b) == x.toString()
    ? true
    : false;
};

module.exports = isPalindrome;
