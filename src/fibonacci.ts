export function fibonacci(n: number): number {
  if (!Number.isInteger(n) || n < 0 || n > 30) {
    throw new Error('Input must be an integer between 0 and 30');
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  return b;
}
