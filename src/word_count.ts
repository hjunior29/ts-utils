/** Count whitespace-separated words. */
export function wordCount(value: string): number {
 const trimmed = value.trim();
 return trimmed.length === 0 ? 0 : trimmed.split(/\s+/u).length;
}
