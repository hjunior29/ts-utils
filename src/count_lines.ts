/**
 * Count lines separated by LF; empty text has zero lines and a trailing LF does not add a line.
 *
 * @param text The input string to count lines in.
 * @returns The number of lines.
 */
export function countLines(text: string): number {
  if (text === '') {
    return 0;
  }

  let count = 1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '\n') {
      count++;
    }
  }

  if (text.endsWith('\n')) {
    count--;
  }

  return count;
}
