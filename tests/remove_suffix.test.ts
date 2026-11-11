import assert from 'node:assert/strict';
import test from 'node:test';
import { removeSuffix } from '../src/remove_suffix.js';

test('removeSuffix removes suffix when present', () => {
  assert.equal(removeSuffix('filename.txt', '.txt'), 'filename');
});
test('removeSuffix removes suffix only once', () => {
  assert.equal(removeSuffix('ababab', 'ab'), 'abab');
});
test('removeSuffix returns original string when suffix not present', () => {
  assert.equal(removeSuffix('filename.jpg', '.txt'), 'filename.jpg');
});
test('removeSuffix handles empty suffix', () => {
  assert.equal(removeSuffix('hello', ''), 'hello');
});
test('removeSuffix handles empty string', () => {
  assert.equal(removeSuffix('', '.txt'), '');
});
test('removeSuffix handles suffix equal to string', () => {
  assert.equal(removeSuffix('test', 'test'), '');
});
