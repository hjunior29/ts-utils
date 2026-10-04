/** Clamp a safe integer to inclusive bounds, rejecting invalid bounds. */
export function clampInt(value: number, lower: number, upper: number): number {
 if (![value, lower, upper].every(Number.isSafeInteger) || lower > upper) {
  throw new RangeError('Expected safe integers and ordered bounds');
 }
 return Math.max(lower, Math.min(value, upper));
}
