import assert from 'node:assert/strict';
import test from 'node:test';
import { rotateInts } from '../src/rotate_ints.js';

test('rotateInts rotates normal sequence by positive offset', () => {
  const input = [1, 2, 3, 4, 5];
  const result = rotateInts(input, 2);
  assert.deepEqual(result, [3, 4, 5, 1, 2]);
});

test('rotateInts preserves original input array', () => {
  const input = [1, 2, 3];
  rotateInts(input, 1);
  assert.deepEqual(input, [1, 2, 3]);
});

test('rotateInts handles empty array', () => {
  const result = rotateInts([], 3);
  assert.deepEqual(result, []);
});

test('rotateInts handles zero offset', () => {
  const input = [10, 20, 30];
  const result = rotateInts(input, 0);
  assert.deepEqual(result, [10, 20, 30]);
});

test('rotateInts handles offset greater than array length', () => {
  const input = [1, 2, 3];
  const result = rotateInts(input, 5);
  assert.deepEqual(result, [3, 1, 2]);
});

test('rotateInts rejects invalid offset', () => {
  assert.throws(() => {
    rotateInts([1, 2, 3], -1);
  }, RangeError);
});

test('rotateInts rejects non-integer offset', () => {
  assert.throws(() => {
    rotateInts([1, 2, 3], 1.5);
  }, RangeError);
});

test('rotateInts rejects non-array input', () => {
  assert.throws(() => {
    // @ts-expect-error testing invalid input
    rotateInts('not an array', 1);
  }, TypeError);
});
