const res = require('./countPrefixesOfAGivenString');

describe('Leetcode problem#2341: Count Prefixes of a Given String', () => {
test("words = ['a','b','c','ab','bc','abc'], s = 'abc' -> 3", () => {
  expect(res(words = ['a','b','c','ab','bc','abc'], s = 'abc')).toEqual(3); 
});

test("words = ['a','a'], s = 'aa' -> 2", () => {
  expect(res(words = ['a','a'], s = 'aa')).toEqual(2); 
});
});