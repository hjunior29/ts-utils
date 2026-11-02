export function padRight(
  input: string,
  targetLength: number,
  padChar: string = ' ',
): string {
  if (
    typeof input !== 'string' ||
    typeof targetLength !== 'number' ||
    typeof padChar !== 'string'
  ) {
    throw new TypeError('Invalid argument types');
  }
  if (!Number.isInteger(targetLength) || targetLength < 0) {
    throw new RangeError('Target length must be a non-negative integer');
  }
  const inputChars = Array.from(input);
  const padChars = Array.from(padChar);
  if (padChars.length !== 1) {
    throw new Error('Padding character must be exactly one code point');
  }
  if (inputChars.length >= targetLength) {
    return input;
  }
  const needed = targetLength - inputChars.length;
  return input + padChars[0].repeat(needed);
}
