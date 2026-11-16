export function isPalindrome(value: string): boolean {
  if (typeof value !== 'string') {
    throw new TypeError('Input must be a string');
  }
  const codePoints = Array.from(value);
  let left = 0;
  let right = codePoints.length - 1;
  while (left < right) {
    if (codePoints[left] !== codePoints[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
