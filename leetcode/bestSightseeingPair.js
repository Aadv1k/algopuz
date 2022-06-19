/**
 * @param {number[]} values
 * @return {number}
 */

// works, But exeeds time limit
var maxScoreSightseeingPair = function (values) {
  let arr = values.length;
  let mainStack = [];

  for (let i = 0; i < arr; i++) {
    let [top] = values.slice(i, i + 1);
    for (let j = i + 1; j < values.length; j++) {
      let aa = top + values[j] + i - j;
      if (!mainStack.includes(aa) || Math.max(mainStack) !== aa) {
        mainStack.push(aa);
      }
    }
  }
  return Math.max(...mainStack);
};

module.exports = maxScoreSightseeingPair;
