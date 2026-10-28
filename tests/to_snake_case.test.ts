import assert from 'node:assert/strict';
import test from 'node:test';
import { toSnakeCase } from '../src/to_snake_case.js';

test('toSnakeCase converts standard camelCase', () => {
  assert.strictEqual(toSnakeCase('camelCase'), 'camel_case');
});

test('toSnakeCase converts PascalCase', () => {
  assert.strictEqual(toSnakeCase('PascalCase'), 'pascal_case');
});

test('toSnakeCase handles acronym boundaries', () => {
  assert.strictEqual(toSnakeCase('XMLParser'), 'xml_parser');
  assert.strictEqual(toSnakeCase('getHTTPResponse'), 'get_http_response');
});

test('toSnakeCase handles empty string', () => {
  assert.strictEqual(toSnakeCase(''), '');
});

test('toSnakeCase handles already snake_case', () => {
  assert.strictEqual(toSnakeCase('already_snake'), 'already_snake');
});

test('toSnakeCase rejects non-string inputs', () => {
  assert.throws(() => {
    toSnakeCase(null as unknown as string);
  }, TypeError);
});
