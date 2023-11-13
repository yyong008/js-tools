type Comparator<T> = (a: T, b: T) => boolean

export function xorWith<T>(comparator: Comparator<T>, ...arrays: T[][]): T[] {
  const allValues: T[] = []

  for (const arr of arrays) {
    allValues.push(...arr)
  }

  const result: T[] = []

  for (const value of allValues) {
    const isUnique = arrays.every(
      (arr) => !arr.some((arrValue) => comparator(value, arrValue))
    )

    if (isUnique) {
      result.push(value)
    }
  }

  return result
}

// 示例用法
// const objects1 = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
// const objects2 = [{ id: 3, name: 'Bob' }, { id: 1, name: 'John' }];

// const customComparator = (a: { id: number }, b: { id: number }) => a.id === b.id;

// const result = xorWith(customComparator, objects1, objects2);

// console.log(result);
