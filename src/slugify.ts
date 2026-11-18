export function slugify(input: string): string {
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string');
  }
  const lowercase = input.toLowerCase();
  const cleaned = lowercase.replace(/[^a-z0-9]+/g, '-');
  const trimmed = cleaned.replace(/^-+|-+$/g, '');
  return trimmed;
}
