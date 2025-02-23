const { test, expect } = require('@jest/globals');
const twoSum = require('./twoSum.easy');

test('example1 :', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});
test('example2 :', () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});
test('example3 :', () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});
