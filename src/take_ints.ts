export function takeInts(numbers: number[], count: number): number[] {
  if (count < 0) {
    throw new Error('Count cannot be negative');
  }
  return numbers.slice(0, count);
}
