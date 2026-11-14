import assert from 'node:assert/strict';
import test from 'node:test';
import { deduplicateInts } from '../src/deduplicate_ints';

test('deduplicateInts removes duplicates and preserves order', () => {
  const input = [1, 2, 3, 2, 1, 4, 3];
  const actual = deduplicateInts(input);
  const expected = [1, 2, 3, 4];
  assert.deepEqual(actual, expected);
});
test('deduplicateInts handles empty array', () => {
  const actual = deduplicateInts([]);
  assert.deepEqual(actual, []);
});
test('deduplicateInts handles array with no duplicates', () => {
  const input = [10, 20, 30];
  const actual = deduplicateInts(input);
  assert.deepEqual(actual, [10, 20, 30]);
});
