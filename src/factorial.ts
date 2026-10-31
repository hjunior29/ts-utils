export function factorial(n: number): number {
  if (!Number.isInteger(n) || n < 0 || n > 12) {
    throw new Error('Input must be an integer between 0 and 12 inclusive');
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
