type Comparator<T> = (value: T) => never

export function unionBy<T>(comparator: Comparator<T>, ...arrays: T[][]): T[] {
  const result: T[] = []

  for (const arr of arrays) {
    for (const value of arr) {
      const compareValue = comparator(value)

      if (
        !result.some(
          (existingValue) => comparator(existingValue) === compareValue
        )
      ) {
        result.push(value)
      }
    }
  }

  return result
}

// 示例用法
// const objects1 = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
// const objects2 = [{ id: 3, name: 'Bob' }, { id: 1, name: 'John' }];
// const result = unionBy((obj) => obj.id, objects1, objects2);

// console.log(result);
