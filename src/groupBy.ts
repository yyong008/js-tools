export function groupBy<T>(arr: T[], property: string): Record<string, T[]> {
  return arr.reduce(
    (result, obj: T) => {
      const key = (obj as Record<string, unknown>)[property] as string
      if (!result[key]) {
        result[key] = []
      }
      result[key].push(obj)
      return result
    },
    {} as Record<string, T[]>
  )
}
