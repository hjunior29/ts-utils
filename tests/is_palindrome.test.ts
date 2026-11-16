import assert from 'node:assert/strict';
import test from 'node:test';
import { isPalindrome } from '../src/is_palindrome';

test('empty string is a palindrome', () => {
  assert.strictEqual(isPalindrome(''), true);
});
test('single character is a palindrome', () => {
  assert.strictEqual(isPalindrome('a'), true);
});
test('even length palindrome', () => {
  assert.strictEqual(isPalindrome('abba'), true);
});
test('odd length palindrome', () => {
  assert.strictEqual(isPalindrome('racecar'), true);
});
test('non-palindrome string', () => {
  assert.strictEqual(isPalindrome('hello'), false);
});
test('case sensitivity check', () => {
  assert.strictEqual(isPalindrome('Racecar'), false);
});
test('unicode code points palindrome', () => {
  assert.strictEqual(isPalindrome('\u{1F600}\u{1F600}'), true);
});
test('invalid input type throws', () => {
  assert.throws(() => {
    isPalindrome(null as unknown as string);
  }, TypeError);
});
