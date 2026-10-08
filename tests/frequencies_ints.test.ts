import assert from 'node:assert/strict';
import test from 'node:test';
import { frequenciesInts } from '../src/frequencies_ints.js';

test('frequenciesInts counts occurrences in a standard sequence', () => {
  const input = [1, 2, 2, 3, 3, 3];
  const result = frequenciesInts(input);

  assert.equal(result.size, 3);
  assert.equal(result.get(1), 1);
  assert.equal(result.get(2), 2);
  assert.equal(result.get(3), 3);
});

test('frequenciesInts handles an empty sequence', () => {
  const input: number[] = [];
  const result = frequenciesInts(input);

  assert.equal(result.size, 0);
});

test('frequenciesInts handles a single element sequence', () => {
  const input = [42];
  const result = frequenciesInts(input);

  assert.equal(result.size, 1);
  assert.equal(result.get(42), 1);
});

test('frequenciesInts handles negative integers and zeros', () => {
  const input = [-1, -1, 0, 0, 0, 5];
  const result = frequenciesInts(input);

  assert.equal(result.size, 3);
  assert.equal(result.get(-1), 2);
  assert.equal(result.get(0), 3);
  assert.equal(result.get(5), 1);
});

test('frequenciesInts rejects non-integer numbers', () => {
  const input = [1, 2.5, 3];

  assert.throws(() => {
    frequenciesInts(input);
  }, TypeError);
});

test('frequenciesInts rejects non-array inputs', () => {
  assert.throws(() => {
    frequenciesInts(null as unknown as number[]);
  }, TypeError);
});
