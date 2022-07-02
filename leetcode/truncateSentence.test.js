const res = require('./truncateSentence');

describe('Leetcode problem#1944: Truncate Sentence', () => {
test("s = 'Hello how are you Contestant', k = 4 -> 'Hello how are you'", () => {
  expect(res(s = 'Hello how are you Contestant', k = 4)).toEqual('Hello how are you'); 
});

test("s = 'What is the solution to this problem', k = 4 -> 'What is the solution'", () => {
  expect(res(s = 'What is the solution to this problem', k = 4)).toEqual('What is the solution'); 
});

test("s = 'chopper is not a tanuki', k = 5 -> 'chopper is not a tanuki'", () => {
  expect(res(s = 'chopper is not a tanuki', k = 5)).toEqual('chopper is not a tanuki'); 
});
});