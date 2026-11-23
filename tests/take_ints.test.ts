import assert from 'node:assert/strict';
import test from 'node:test';
import { takeInts } from '../src/take_ints.js';

test('takeInts normal case', () => {
  const input = [10, 20, 30, 40, 50];
  const result = takeInts(input, 3);
  assert.deepEqual(result, [10, 20, 30]);
  assert.deepEqual(input, [10, 20, 30, 40, 50]);
});

test('takeInts empty array', () => {
  const input: number[] = [];
  const result = takeInts(input, 2);
  assert.deepEqual(result, []);
});

test('takeInts zero count', () => {
  const input = [1, 2, 3];
  const result = takeInts(input, 0);
  assert.deepEqual(result, []);
});

test('takeInts count greater than length', () => {
  const input = [1, 2];
  const result = takeInts(input, 5);
  assert.deepEqual(result, [1, 2]);
});

test('takeInts negative count rejection', () => {
  const input = [1, 2, 3];
  assert.throws(() => {
    takeInts(input, -1);
  }, /Error/);
});
