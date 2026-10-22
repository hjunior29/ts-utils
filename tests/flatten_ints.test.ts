import assert from 'node:assert/strict';
import test from 'node:test';
import { flattenInts } from '../src/flatten_ints';

test('flattenInts with normal nested sequences', () => {
  const input = [[1, 2], [3], [4, 5, 6]];
  const expected = [1, 2, 3, 4, 5, 6];
  const actual = flattenInts(input);
  assert.deepEqual(actual, expected);
});
test('flattenInts with empty outer sequence', () => {
  const input: number[][] = [];
  const expected: number[] = [];
  const actual = flattenInts(input);
  assert.deepEqual(actual, expected);
});
test('flattenInts with empty inner sequences', () => {
  const input = [[], [], []];
  const expected: number[] = [];
  const actual = flattenInts(input);
  assert.deepEqual(actual, expected);
});
test('flattenInts with mixed empty and non-empty sequences', () => {
  const input = [[1], [], [2, 3], [], [4]];
  const expected = [1, 2, 3, 4];
  const actual = flattenInts(input);
  assert.deepEqual(actual, expected);
});
