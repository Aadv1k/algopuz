const res = require('./isPrefixOfWord');

describe('Leetcode problem#1566: Check If a Word Occurs As a Prefix of Any Word in a Sentence', () => {
test("sentence = 'i love eating burger', searchWord = 'burg' -> 4", () => {
  expect(res(sentence = 'i love eating burger', searchWord = 'burg')).toEqual(4); 
});

test("sentence = 'this problem is an easy problem', searchWord = 'pro' -> 2", () => {
  expect(res(sentence = 'this problem is an easy problem', searchWord = 'pro')).toEqual(2); 
});

test("sentence = 'i am tired', searchWord = 'you' -> -1", () => {
  expect(res(sentence = 'i am tired', searchWord = 'you')).toEqual(-1); 
});
});
