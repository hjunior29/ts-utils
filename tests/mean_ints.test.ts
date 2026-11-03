import assert from 'node:assert/strict';
import test from 'node:test';
import { meanInts } from '../src/mean_ints';

test('compute mean for normal integer sequence', () => {
  const result = meanInts([1, 2, 3, 4, 5]);
  assert.strictEqual(result, 3);
});
test('compute mean for single element', () => {
  const result = meanInts([42]);
  assert.strictEqual(result, 42);
});
test('compute mean for negative numbers', () => {
  const result = meanInts([-10, 0, 10]);
  assert.strictEqual(result, 0);
});
test('reject empty input array', () => {
  assert.throws(() => {
    meanInts([]);
  }, /empty/i);
});
