import assert from 'node:assert/strict';
import test from 'node:test';
import { escapeHtml } from '../src/escape_html';

test('escapeHtml escapes special characters', () => {
  const input = "<script>\"& 'hello'</script>";
  const expected = '&lt;script&gt;&quot;&amp; &#39;hello&#39;&lt;/script&gt;';
  assert.strictEqual(escapeHtml(input), expected);
});

test('escapeHtml handles empty string', () => {
  assert.strictEqual(escapeHtml(''), '');
});

test('escapeHtml leaves safe text unchanged', () => {
  const input = 'HelloWorld123';
  assert.strictEqual(escapeHtml(input), input);
});

test('escapeHtml rejects non-string input', () => {
  assert.throws(() => {
    escapeHtml(null as unknown as string);
  }, TypeError);
});
