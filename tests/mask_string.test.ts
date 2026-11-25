import assert from 'node:assert/strict';
import test from 'node:test';
import { maskString } from '../src/mask_string';

test('maskString masks all but the final N code points', () => {
  assert.equal(maskString('1234567890', 4), '******7890');
  assert.equal(maskString('hello', 2), '***lo');
  assert.equal(maskString('abc', 0), '***');
});
test('maskString handles visible count greater than or equal to input length', () => {
  assert.equal(maskString('abc', 5), 'abc');
  assert.equal(maskString('abc', 3), 'abc');
});
test('maskString handles empty string input', () => {
  assert.equal(maskString('', 0), '');
  assert.equal(maskString('', 2), '');
});
test('maskString rejects negative visible count', () => {
  assert.throws(() => {
    maskString('abc', -1);
  }, /^Error: Visible count cannot be negative.$/);
});
test('maskString correctly handles multi-byte Unicode code points', () => {
  assert.equal(maskString('👋🌍🚀', 1), '**🚀');
  assert.equal(maskString('👋🌍🚀', 2), '*🌍🚀');
});
