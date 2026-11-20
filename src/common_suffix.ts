export function commonSuffix(first: string, second: string): string {
  const firstCodePoints = Array.from(first);
  const secondCodePoints = Array.from(second);

  let firstIndex = firstCodePoints.length - 1;
  let secondIndex = secondCodePoints.length - 1;
  const commonCodePoints: string[] = [];

  while (firstIndex >= 0 && secondIndex >= 0) {
    if (firstCodePoints[firstIndex] === secondCodePoints[secondIndex]) {
      commonCodePoints.unshift(firstCodePoints[firstIndex]);
      firstIndex--;
      secondIndex--;
    } else {
      break;
    }
  }

  return commonCodePoints.join('');
}
