export function hammingDistance(a: string, b: string): number {
  if (a.length !== b.length) {
    throw new Error('Strings must be of equal length');
  }
  let distance = 0;
  for (let i = 0; i < a.length; i++) {
    if (a.charCodeAt(i) !== b.charCodeAt(i)) {
      distance++;
    }
  }
  return distance;
}
