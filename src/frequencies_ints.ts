export function frequenciesInts(numbers: number[]): Map<number, number> {
  if (!Array.isArray(numbers)) {
    throw new TypeError('Input must be an array of integers');
  }

  const frequencies = new Map<number, number>();

  for (const n of numbers) {
    if (!Number.isInteger(n)) {
      throw new TypeError('All elements must be integers');
    }
    const currentCount = frequencies.get(n) ?? 0;
    frequencies.set(n, currentCount + 1);
  }

  return frequencies;
}
