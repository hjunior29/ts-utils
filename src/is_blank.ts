export function isBlank(value: string): boolean {
  if (typeof value !== 'string') {
    throw new TypeError('Value must be a string');
  }
  return value.trim().length === 0;
}
