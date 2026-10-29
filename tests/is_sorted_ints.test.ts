import assert from 'node:assert/strict';
import test from 'node:test';
import { isSortedInts } from '../src/is_sorted_ints';

test('isSortedInts handles empty and single-element arrays', () => {
  assert.equal(isSortedInts([]), true);
  assert.equal(isSortedInts([42]), true);
});
test('isSortedInts detects sorted sequences', () => {
  assert.equal(isSortedInts([1, 2, 3, 4, 5]), true);
  assert.equal(isSortedInts([1, 2, 2, 3, 5]), true);
  assert.equal(isSortedInts([-5, 0, 0, 10]), true);
});
test('isSortedInts detects unsorted sequences', () => {
  assert.equal(isSortedInts([1, 3, 2, 4]), false);
  assert.equal(isSortedInts([5, 4, 3, 2, 1]), false);
  assert.equal(isSortedInts([0, -1]), false);
});
