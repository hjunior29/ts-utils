import assert from 'node:assert/strict';
import test from 'node:test';
import { rangeInts } from '../src/range_ints';

test('rangeInts generates standard range with step 1', () => {
  const actual = rangeInts(1, 5);
  assert.deepEqual(actual, [1, 2, 3, 4]);
});

test('rangeInts generates range with custom positive step', () => {
  const actual = rangeInts(1, 10, 3);
  assert.deepEqual(actual, [1, 4, 7]);
});

test('rangeInts returns empty array when start equals end', () => {
  const actual = rangeInts(5, 5);
  assert.deepEqual(actual, []);
});

test('rangeInts returns empty array when start is greater than end', () => {
  const actual = rangeInts(5, 1);
  assert.deepEqual(actual, []);
});

test('rangeInts rejects zero step', () => {
  assert.throws(() => {
    rangeInts(1, 5, 0);
  }, /Step must be a positive integer./);
});

test('rangeInts rejects negative step', () => {
  assert.throws(() => {
    rangeInts(1, 5, -1);
  }, /Step must be a positive integer./);
});
