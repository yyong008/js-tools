type Comparator<T> = (a: T, b: T) => boolean

export function uniqWith<T>(comparator: Comparator<T>, arr: T[]): T[] {
  const result: T[] = []

  for (const value of arr) {
    if (!result.some((existingValue) => comparator(existingValue, value))) {
      result.push(value)
    }
  }

  return result
}

// 示例用法
// const objects = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 1, name: 'John' },
// ];

// const customComparator = (a: { id: number }, b: { id: number }) => a.id === b.id;

// const result = uniqWith(customComparator, objects);

// console.log(result);
