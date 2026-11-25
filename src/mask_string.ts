export function maskString(input: string, visibleCount: number): string {
  if (visibleCount < 0) {
    throw new Error('Visible count cannot be negative.');
  }
  const codePoints = Array.from(input);
  if (visibleCount >= codePoints.length) {
    return input;
  }
  const maskedCount = codePoints.length - visibleCount;
  const maskedPart = '*'.repeat(maskedCount);
  const visiblePart = codePoints.slice(maskedCount).join('');
  return maskedPart + visiblePart;
}
