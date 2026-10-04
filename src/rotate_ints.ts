export function rotateInts(arr: number[], offset: number): number[] {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array of integers');
  }
  if (!Number.isInteger(offset) || offset < 0) {
    throw new RangeError('Offset must be a nonnegative integer');
  }
  if (arr.length === 0) {
    return [];
  }
  const effectiveOffset = offset % arr.length;
  if (effectiveOffset === 0) {
    return [...arr];
  }
  return [...arr.slice(effectiveOffset), ...arr.slice(0, effectiveOffset)];
}
