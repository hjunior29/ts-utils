import assert from 'node:assert/strict';
import test from 'node:test';
import { truncateString } from '../src/truncate_string';

test('truncateString normal truncation', () => {
  const result = truncateString('Hello, World!', 5);
  assert.equal(result, 'Hello');
});
test('truncateString exact length', () => {
  const result = truncateString('abc', 3);
  assert.equal(result, 'abc');
});
test('truncateString shorter than limit', () => {
  const result = truncateString('abc', 10);
  assert.equal(result, 'abc');
});
test('truncateString empty string', () => {
  const result = truncateString('', 0);
  assert.equal(result, '');
});
test('truncateString unicode code points', () => {
  const result = truncateString('👋🌍✨', 2);
  assert.equal(result, '👋🌍');
});
test('truncateString negative maxLength', () => {
  assert.throws(() => {
    truncateString('abc', -1);
  }, /maxLength must be a nonnegative integer/);
});
test('truncateString non-integer maxLength', () => {
  assert.throws(() => {
    truncateString('abc', 2.5);
  }, /maxLength must be a nonnegative integer/);
});
