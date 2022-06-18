const res = require('./longestCommonPrefix');

describe('Leetcode problem#14: Longest Common Prefix', () => {
test("strs = ['flower','flow','flight'] -> 'fl'", () => {
  expect(res(strs = ['flower','flow','flight'])).toEqual('fl'); 
});

test("strs = ['dog','racecar','car'] -> ''", () => {
  expect(res(strs = ['dog','racecar','car'])).toEqual(''); 
});
});