import assert from 'node:assert/strict';
import test from 'node:test';
import { padLeft } from '../src/pad_left.js';

test('pads short string on the left with specified character', () => {
  const result = padLeft('abc', 5, 'x');
  assert.equal(result, 'xxabc');
});

test('does not truncate if input code-point length equals target length', () => {
  const result = padLeft('abcde', 5, 'x');
  assert.equal(result, 'abcde');
});

test('does not truncate if input code-point length exceeds target length', () => {
  const result = padLeft('abcdef', 5, 'x');
  assert.equal(result, 'abcdef');
});

test('handles empty string input', () => {
  const result = padLeft('', 4, '0');
  assert.equal(result, '0000');
});

test('handles target length of zero', () => {
  const result = padLeft('abc', 0, '0');
  assert.equal(result, 'abc');
});

test('throws error when target length is negative', () => {
  assert.throws(() => {
    padLeft('abc', -1, '0');
  }, /Target length must be a non-negative integer\./);
});

test('throws error when target length is not an integer', () => {
  assert.throws(() => {
    padLeft('abc', 3.5, '0');
  }, /Target length must be a non-negative integer\./);
});

test('throws error when padChar has length greater than one', () => {
  assert.throws(() => {
    padLeft('abc', 5, 'xx');
  }, /Padding character must be a single character string\./);
});

test('throws error when padChar is empty', () => {
  assert.throws(() => {
    padLeft('abc', 5, '');
  }, /Padding character must be a single character string\./);
});
