export function partitionInts(numbers: number[]): [number[], number[]] {
  if (!Array.isArray(numbers)) {
    throw new TypeError('Input must be an array of numbers');
  }

  const evens: number[] = [];
  const odds: number[] = [];

  for (const num of numbers) {
    if (typeof num !== 'number' || !Number.isInteger(num)) {
      throw new TypeError('All elements must be integers');
    }

    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  }

  return [evens, odds];
}
