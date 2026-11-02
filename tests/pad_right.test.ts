import assert from 'node:assert/strict';
import test from 'node:test';
import { padRight } from '../src/pad_right';

test('pads short string with spaces', () => {
  assert.equal(padRight('abc', 5), 'abc  ');
});

test('does not truncate when input is longer than target length', () => {
  assert.equal(padRight('abcdef', 3), 'abcdef');
});

test('handles exact length without padding', () => {
  assert.equal(padRight('abc', 3), 'abc');
});

test('handles empty string input', () => {
  assert.equal(padRight('', 4, 'x'), 'xxxx');
});

test('supports emoji code points in input and padding', () => {
  assert.equal(padRight('😀', 3, '🚀'), '😀🚀🚀');
});

test('rejects multi-character padding string', () => {
  assert.throws(() => {
    padRight('abc', 5, 'xx');
  });
});

test('rejects negative target length', () => {
  assert.throws(() => {
    padRight('abc', -1);
  });
});

test('rejects non-integer target length', () => {
  assert.throws(() => {
    padRight('abc', 2.5);
  });
});
