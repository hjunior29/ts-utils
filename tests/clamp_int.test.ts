import assert from 'node:assert/strict';
import test from 'node:test';
import { clampInt } from '../src/clamp_int';

test('clampInt handles interior, endpoints and equal bounds', () => {
  for (const [value, lower, upper, expected] of [
    [5, 0, 10, 5],
    [-1, 0, 10, 0],
    [11, 0, 10, 10],
    [0, 0, 10, 0],
    [10, 0, 10, 10],
    [8, 3, 3, 3],
  ]) {
    assert.equal(clampInt(value, lower, upper), expected);
  }
});
test('clampInt rejects reversed bounds and unsafe integers', () => {
  assert.throws(() => clampInt(5, 10, 0), RangeError);
  assert.throws(() => clampInt(0.5, 0, 1), RangeError);
  assert.throws(() => clampInt(Infinity, 0, 1), RangeError);
});
