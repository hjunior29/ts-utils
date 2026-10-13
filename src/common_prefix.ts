export function commonPrefix(first: string, second: string): string {
  const minLength = Math.min(first.length, second.length);
  let index = 0;
  while (
    index < minLength &&
    first.charCodeAt(index) === second.charCodeAt(index)
  ) {
    index++;
  }
  return first.slice(0, index);
}
