export function truncateString(input: string, maxLength: number): string {
  if (!Number.isInteger(maxLength) || maxLength < 0) {
    throw new Error('maxLength must be a nonnegative integer');
  }
  const codePoints = Array.from(input);
  if (codePoints.length <= maxLength) {
    return input;
  }
  return codePoints.slice(0, maxLength).join('');
}
