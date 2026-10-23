import assert from 'node:assert/strict';
import test from 'node:test';
import { isPrime } from '../src/is_prime';

test('primes and non-primes', () => {
  assert.equal(isPrime(2), true);
  assert.equal(isPrime(3), true);
  assert.equal(isPrime(4), false);
  assert.equal(isPrime(17), true);
  assert.equal(isPrime(18), false);
  assert.equal(isPrime(97), true);
  assert.equal(isPrime(100), false);
});
test('boundary and invalid cases', () => {
  assert.equal(isPrime(-5), false);
  assert.equal(isPrime(0), false);
  assert.equal(isPrime(1), false);
  assert.equal(isPrime(2.5), false);
});
