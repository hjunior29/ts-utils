import assert from 'node:assert/strict';
import test from 'node:test';
import { intersectionInts } from '../src/intersection_ints';

test('intersectionInts returns unique shared integers in first-sequence order', () => {
  const first = [1, 2, 3, 2, 4, 5];
  const second = [4, 2, 6, 1];
  const actual = intersectionInts(first, second);
  assert.deepEqual(actual, [1, 2, 4]);
});
test('intersectionInts returns empty array when there is no overlap', () => {
  const first = [1, 2, 3];
  const second = [4, 5, 6];
  const actual = intersectionInts(first, second);
  assert.deepEqual(actual, []);
});
test('intersectionInts handles empty inputs correctly', () => {
  assert.deepEqual(intersectionInts([], [1, 2]), []);
  assert.deepEqual(intersectionInts([1, 2], []), []);
  assert.deepEqual(intersectionInts([], []), []);
});
