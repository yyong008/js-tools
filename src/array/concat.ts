export function concat<T>(...arrays: T[][]): T[] {
  return arrays.reduce((result, array) => result.concat(array), [])
}
