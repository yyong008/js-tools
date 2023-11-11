// compact
export function compact<T>(array: T[]): T[] {
  return array.filter(Boolean)
  // eq: array.filter(element => Boolean(element));
}
