import assert from 'node:assert/strict';
import test from 'node:test';
import { factorial } from '../src/factorial';

test('factorial computes correct values for valid range 0 through 12', () => {
  assert.strictEqual(factorial(0), 1);
  assert.strictEqual(factorial(1), 1);
  assert.strictEqual(factorial(2), 2);
  assert.strictEqual(factorial(3), 6);
  assert.strictEqual(factorial(4), 24);
  assert.strictEqual(factorial(5), 120);
  assert.strictEqual(factorial(6), 720);
  assert.strictEqual(factorial(7), 5040);
  assert.strictEqual(factorial(8), 40320);
  assert.strictEqual(factorial(9), 362880);
  assert.strictEqual(factorial(10), 3628800);
  assert.strictEqual(factorial(11), 39916800);
  assert.strictEqual(factorial(12), 479001600);
});

test('factorial rejects negative integers', () => {
  assert.throws(() => {
    factorial(-1);
  }, /Input must be an integer between 0 and 12 inclusive/);
});

test('factorial rejects integers greater than 12', () => {
  assert.throws(() => {
    factorial(13);
  }, /Input must be an integer between 0 and 12 inclusive/);
});

test('factorial rejects non-integer numbers', () => {
  assert.throws(() => {
    factorial(5.5);
  }, /Input must be an integer between 0 and 12 inclusive/);
});
