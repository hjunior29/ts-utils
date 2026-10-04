export function padLeft(
  input: string,
  targetLength: number,
  padChar: string,
): string {
  if (!Number.isInteger(targetLength) || targetLength < 0) {
    throw new Error('Target length must be a non-negative integer.');
  }
  if (padChar.length !== 1) {
    throw new Error('Padding character must be a single character string.');
  }
  const codePoints = Array.from(input);
  if (codePoints.length >= targetLength) {
    return input;
  }
  const paddingLength = targetLength - codePoints.length;
  const padding = padChar.repeat(paddingLength);
  return padding + input;
}
