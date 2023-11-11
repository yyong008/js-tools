export function values<T>(obj: Record<string, T>): T[] {
  if (Object.values) {
    return Object.values(obj)
  } else {
    const values: T[] = []
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        values.push(obj[key])
      }
    }
    return values
  }
}
