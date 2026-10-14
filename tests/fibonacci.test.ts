import assert from 'node:assert/strict';
import test from 'node:test';
import { fibonacci } from '../src/fibonacci';

test('fibonacci base cases', () => {
  assert.equal(fibonacci(0), 0);
  assert.equal(fibonacci(1), 1);
});

test('fibonacci small values', () => {
  assert.equal(fibonacci(2), 1);
  assert.equal(fibonacci(3), 2);
  assert.equal(fibonacci(4), 3);
  assert.equal(fibonacci(5), 5);
});

test('fibonacci upper boundary', () => {
  assert.equal(fibonacci(30), 832040);
});

test('fibonacci rejects negative numbers', () => {
  assert.throws(() => {
    fibonacci(-1);
  }, /Input must be an integer between 0 and 30/);
});

test('fibonacci rejects numbers above 30', () => {
  assert.throws(() => {
    fibonacci(31);
  }, /Input must be an integer between 0 and 30/);
});

test('fibonacci rejects non-integers', () => {
  assert.throws(() => {
    fibonacci(5.5);
  }, /Input must be an integer between 0 and 30/);
});
