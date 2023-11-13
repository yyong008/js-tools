type Comparator<T> = (value: T) => unknown

export function uniqBy<T>(comparator: Comparator<T>, arr: T[]): T[] {
  const seen = new Set<unknown>()
  return arr.filter((value) => {
    const compareValue = comparator(value)
    if (!seen.has(compareValue)) {
      seen.add(compareValue)
      return true
    }
    return false
  })
}

// 示例用法
// const objects = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 1, name: 'John' }];
// const result = uniqBy((obj) => obj.id, objects);

// console.log(result);
