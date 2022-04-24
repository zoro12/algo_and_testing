const { test, expect } = require('@jest/globals');
const isValid = require('./validParentheses.easy');

test('example1 :', () => {
  expect(isValid('()')).toBe(true);
});
test('example2 :', () => {
  expect(isValid('()[]{}')).toBe(true);
});
test('example3 :', () => {
  expect(isValid('(]')).toBe(false);
});
