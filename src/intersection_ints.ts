export function intersectionInts(
  first: readonly number[],
  second: readonly number[],
): number[] {
  const lookup = new Set(second);
  const result: number[] = [];
  for (const value of first) {
    if (lookup.has(value)) {
      result.push(value);
      lookup.delete(value);
    }
  }
  return result;
}
