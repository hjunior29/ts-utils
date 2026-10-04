import test from 'node:test';
import assert from 'node:assert/strict';
import { reverseString } from '../src/reverse_string';

test('reverseString handles empty, single, ASCII and Unicode strings', () => {
 for (const [input, expected] of [['', ''], ['a', 'a'], ['hello', 'olleh'], ['a😀é', 'é😀a']]) {
  assert.equal(reverseString(input), expected);
 }
});
