import assert from 'node:assert/strict';
import test from 'node:test';
import { hammingDistance } from '../src/hamming_distance';

test('hammingDistance counts differences in equal-length strings', () => {
  assert.strictEqual(hammingDistance('abc', 'adc'), 1);
  assert.strictEqual(hammingDistance('karolin', 'kathrin'), 3);
  assert.strictEqual(hammingDistance('1011101', '1001001'), 2);
});
test('hammingDistance handles empty strings', () => {
  assert.strictEqual(hammingDistance('', ''), 0);
});
test('hammingDistance rejects unequal lengths', () => {
  assert.throws(() => {
    hammingDistance('abc', 'ab');
  }, /Error/);
});
