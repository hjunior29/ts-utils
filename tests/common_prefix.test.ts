import assert from 'node:assert/strict';
import test from 'node:test';
import { commonPrefix } from '../src/common_prefix';

test('commonPrefix finds shared prefix', () => {
  assert.equal(commonPrefix('foobar', 'foobaz'), 'fooba');
});
test('commonPrefix handles no shared prefix', () => {
  assert.equal(commonPrefix('hello', 'world'), '');
});
test('commonPrefix handles identical strings', () => {
  assert.equal(commonPrefix('test', 'test'), 'test');
});
test('commonPrefix handles empty strings', () => {
  assert.equal(commonPrefix('', 'abc'), '');
  assert.equal(commonPrefix('abc', ''), '');
  assert.equal(commonPrefix('', ''), '');
});
