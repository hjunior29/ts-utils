import assert from 'node:assert/strict';
import test from 'node:test';
import { countLines } from '../src/count_lines.js';

test('countLines returns zero for empty string', () => {
  assert.equal(countLines(''), 0);
});

test('countLines returns one for a single line without newline', () => {
  assert.equal(countLines('hello'), 1);
});

test('countLines handles trailing newline without adding an extra line', () => {
  assert.equal(countLines('hello\n'), 1);
});

test('countLines correctly counts multiple lines with and without trailing newline', () => {
  assert.equal(countLines('line1\nline2\nline3'), 3);
  assert.equal(countLines('line1\nline2\nline3\n'), 3);
});

test('countLines handles consecutive newlines as separate lines', () => {
  assert.equal(countLines('\n\n'), 2);
});
