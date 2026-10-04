import assert from 'node:assert/strict';
import test from 'node:test';
import { wordCount } from '../src/word_count';

test('wordCount handles empty strings and Unicode whitespace', () => {
  assert.equal(wordCount(''), 0);
  assert.equal(wordCount(' \t\n'), 0);
  assert.equal(wordCount('hello'), 1);
  assert.equal(wordCount(' hello  world\nagain '), 3);
  assert.equal(wordCount('one\u2003two'), 2);
});
