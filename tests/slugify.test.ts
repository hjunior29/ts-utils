import assert from 'node:assert/strict';
import test from 'node:test';
import { slugify } from '../src/slugify';

test('slugify normal text', () => {
  assert.equal(slugify('Hello World!'), 'hello-world');
});
test('slugify empty string', () => {
  assert.equal(slugify(''), '');
});
test('slugify complex separators', () => {
  assert.equal(slugify('   Foo---Bar...Baz   '), 'foo-bar-baz');
});
test('slugify non-ASCII characters', () => {
  assert.equal(slugify('Café au Lait'), 'caf-au-lait');
});
test('slugify numbers', () => {
  assert.equal(slugify('Version 2.0 Release'), 'version-2-0-release');
});
test('slugify invalid input type', () => {
  assert.throws(() => {
    slugify(null as unknown as string);
  }, TypeError);
});
