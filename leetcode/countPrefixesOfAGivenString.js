/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  let i = 0;
  for (let j = 0; j < words.length; j++) {
    s.startsWith(words[j]) ? i++ : false;
  }
  return i;
};

module.exports = countPrefixes;
