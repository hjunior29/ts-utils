export function meanInts(values: number[]): number {
  if (values.length === 0) {
    throw new Error('Input array cannot be empty');
  }
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  return sum / values.length;
}
