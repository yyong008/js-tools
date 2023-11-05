export function chunk<T>(arr: T[], size: number = 1): T[][] {
  if (!Array.isArray(arr) || size <= 0) {
    return []
  }
  const chunkedArray: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    chunkedArray.push(arr.slice(i, i + size))
  }
  return chunkedArray
}
