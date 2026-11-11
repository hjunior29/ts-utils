export function removeSuffix(str: string, suffix: string): string {
  if (suffix === '') {
    return str;
  }
  if (str.endsWith(suffix)) {
    return str.slice(0, str.length - suffix.length);
  }
  return str;
}
