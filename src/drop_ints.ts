export function dropInts(arr: number[], n: number): number[] {
  if (n < 0) {
    throw new Error('Negative N is not allowed');
  }
  return arr.slice(n);
}
