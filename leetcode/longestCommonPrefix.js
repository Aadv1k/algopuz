/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) { 
  let curStr = "";

  if (strs[0].length === 0) return '';

  for (let i = 0; i < 200; i++) {
    let stack = []
    stack.push(...strs.map(e => e.slice(i, i+1)))
    
    if (stack.every((a) => a === stack[0]) && stack[0]) {
      curStr = curStr.concat(stack.pop())
    } else {
      return curStr
    }
  } 
};

module.exports = longestCommonPrefix;
