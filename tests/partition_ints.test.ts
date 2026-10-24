import assert from 'node:assert/strict';
import test from 'node:test';
import { partitionInts } from '../src/partition_ints.js';

test('partitionInts partitions mixed integers into evens and odds while preserving order', () => {
  const input = [1, 2, 3, 4, 5, 6];
  const [evens, odds] = partitionInts(input);
  assert.deepEqual(evens, [2, 4, 6]);
  assert.deepEqual(odds, [1, 3, 5]);
});

test('partitionInts handles empty input array', () => {
  const [evens, odds] = partitionInts([]);
  assert.deepEqual(evens, []);
  assert.deepEqual(odds, []);
});

test('partitionInts handles array with only even numbers', () => {
  const [evens, odds] = partitionInts([2, 8, 4]);
  assert.deepEqual(evens, [2, 8, 4]);
  assert.deepEqual(odds, []);
});

test('partitionInts handles array with only odd numbers', () => {
  const [evens, odds] = partitionInts([7, 1, 9]);
  assert.deepEqual(evens, []);
  assert.deepEqual(odds, [7, 1, 9]);
});

test('partitionInts handles negative integers correctly', () => {
  const [evens, odds] = partitionInts([-3, -2, -1, 0, 1, 2]);
  assert.deepEqual(evens, [-2, 0, 2]);
  assert.deepEqual(odds, [-3, -1, 1]);
});

test('partitionInts rejects non-array input', () => {
  assert.throws(() => {
    partitionInts(null as unknown as number[]);
  }, TypeError);
});

test('partitionInts rejects array with non-integer elements', () => {
  assert.throws(() => {
    partitionInts([1, 2, 3.5]);
  }, TypeError);
});
