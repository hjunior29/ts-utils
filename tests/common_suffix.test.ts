import assert from 'node:assert/strict';
import test from 'node:test';
import { commonSuffix } from '../src/common_suffix.js';

test('commonSuffix finds simple common suffix', () => {
  const result = commonSuffix('programming', 'gaming');
  assert.equal(result, 'ming');
});

test('commonSuffix returns empty string when no common suffix', () => {
  const result = commonSuffix('hello', 'world');
  assert.equal(result, '');
});

test('commonSuffix handles identical strings', () => {
  const result = commonSuffix('test', 'test');
  assert.equal(result, 'test');
});

test('commonSuffix handles one string being a suffix of another', () => {
  const result = commonSuffix('independent', 'dependent');
  assert.equal(result, 'dependent');
});

test('commonSuffix handles empty strings', () => {
  assert.equal(commonSuffix('', 'abc'), '');
  assert.equal(commonSuffix('abc', ''), '');
  assert.equal(commonSuffix('', ''), '');
});

test('commonSuffix handles unicode code points correctly', () => {
  const result = commonSuffix('cafe\u{1F30D}', 'latte\u{1F30D}');
  assert.equal(result, 'e\u{1F30D}');
});
