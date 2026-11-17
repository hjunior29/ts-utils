import assert from 'node:assert/strict';
import test from 'node:test';
import { sumDigits } from '../src/sum_digits';

test('sumDigits sums decimal digits of a nonnegative integer correctly', () => {
  assert.equal(sumDigits(0), 0);
  assert.equal(sumDigits(5), 5);
  assert.equal(sumDigits(123), 6);
  assert.equal(sumDigits(9999), 36);
  assert.equal(sumDigits(405), 9);
});
test('sumDigits rejects negative inputs', () => {
  assert.throws(() => sumDigits(-1), /Error/);
  assert.throws(() => sumDigits(-123), /Error/);
});
test('sumDigits rejects non-integer inputs', () => {
  assert.throws(() => sumDigits(12.34), /Error/);
  assert.throws(() => sumDigits(NaN), /Error/);
  assert.throws(() => sumDigits(Infinity), /Error/);
});
