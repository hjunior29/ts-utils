export function rangeInts(
  start: number,
  end: number,
  step: number = 1,
): number[] {
  if (step <= 0) {
    throw new Error('Step must be a positive integer.');
  }
  const result: number[] = [];
  for (let current = start; current < end; current += step) {
    result.push(current);
  }
  return result;
}
