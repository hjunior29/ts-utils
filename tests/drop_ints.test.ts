import assert from 'node:assert/strict';
import test from 'node:test';
import { dropInts } from '../src/drop_ints';

test('dropInts normal case', () => {
  const input = [1, 2, 3, 4, 5];
  const result = dropInts(input, 2);
  assert.deepEqual(result, [3, 4, 5]);
  assert.deepEqual(input, [1, 2, 3, 4, 5]);
});
test('dropInts empty array', () => {
  const result = dropInts([], 1);
  assert.deepEqual(result, []);
});
test('dropInts zero n', () => {
  const input = [1, 2];
  const result = dropInts(input, 0);
  assert.deepEqual(result, [1, 2]);
});
test('dropInts n greater than length', () => {
  const input = [1, 2];
  const result = dropInts(input, 5);
  assert.deepEqual(result, []);
});
test('dropInts negative n', () => {
  assert.throws(() => {
    dropInts([1, 2], -1);
  }, /Negative N is not allowed/);
});
