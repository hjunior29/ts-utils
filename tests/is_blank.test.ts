import assert from 'node:assert/strict';
import test from 'node:test';
import { isBlank } from '../src/is_blank';

test('isBlank handles empty string', () => {
  assert.equal(isBlank(''), true);
});
test('isBlank handles whitespace-only strings', () => {
  assert.equal(isBlank('   '), true);
  assert.equal(isBlank('\t\n\r'), true);
});
test('isBlank handles non-empty strings with content', () => {
  assert.equal(isBlank('abc'), false);
  assert.equal(isBlank('  hello  '), false);
});
test('isBlank rejects non-string inputs', () => {
  assert.throws(() => isBlank(null as unknown as string), TypeError);
  assert.throws(() => isBlank(123 as unknown as string), TypeError);
});
