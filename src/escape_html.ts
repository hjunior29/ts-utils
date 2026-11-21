export function escapeHtml(input: string): string {
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string');
  }
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
