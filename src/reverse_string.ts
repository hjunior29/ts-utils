/** Reverse a string by Unicode code points. */
export function reverseString(value: string): string {
  return Array.from(value).reverse().join('');
}
