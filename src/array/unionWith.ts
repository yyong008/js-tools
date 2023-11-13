type Comparator<T> = (a: T, b: T) => boolean

export function unionWith<T>(comparator: Comparator<T>, ...arrays: T[][]): T[] {
  const result: T[] = []

  for (const arr of arrays) {
    for (const value of arr) {
      if (!result.some((existingValue) => comparator(existingValue, value))) {
        result.push(value)
      }
    }
  }

  return result
}

// 示例用法
// const objects1 = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
// const objects2 = [{ id: 3, name: 'Bob' }, { id: 1, name: 'John' }];

// const customComparator = (a: { id: number }, b: { id: number }) => a.id === b.id;

// const result = unionWith(customComparator, objects1, objects2);

// console.log(result);
