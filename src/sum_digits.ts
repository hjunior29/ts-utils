export function sumDigits(n: number): number {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('Input must be a nonnegative integer.');
  }
  let sum = 0;
  let current = n;
  if (current === 0) {
    return 0;
  }
  while (current > 0) {
    sum += current % 10;
    current = Math.floor(current / 10);
  }
  return sum;
}
