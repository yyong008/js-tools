export function differenceBy<T, U>(
  array1: T[],
  array2: T[],
  iteratee: (item: T) => U
): T[] {
  const set = new Set(array2.map(iteratee))
  return array1.filter((item) => !set.has(iteratee(item)))
}
