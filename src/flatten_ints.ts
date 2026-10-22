export function flattenInts(sequences: Iterable<Iterable<number>>): number[] {
  const result: number[] = [];
  for (const sequence of sequences) {
    for (const value of sequence) {
      result.push(value);
    }
  }
  return result;
}
