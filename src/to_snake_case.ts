export function toSnakeCase(input: string): string {
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string');
  }
  if (input === '') {
    return '';
  }
  let result = '';
  const length = input.length;
  for (let i = 0; i < length; i++) {
    const char = input[i];
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      const lowerChar = String.fromCharCode(code + 32);
      const isFirst = i === 0;
      const prevIsUpper =
        !isFirst &&
        input.charCodeAt(i - 1) >= 65 &&
        input.charCodeAt(i - 1) <= 90;
      const nextIsLower =
        i + 1 < length &&
        input.charCodeAt(i + 1) >= 97 &&
        input.charCodeAt(i + 1) <= 122;
      if (!isFirst && (!prevIsUpper || nextIsLower)) {
        result += '_';
      }
      result += lowerChar;
    } else {
      result += char;
    }
  }
  return result;
}
