export function union<T>(...arrays: T[][]): T[] {
  const result: T[] = []

  for (const arr of arrays) {
    for (const value of arr) {
      if (!result.includes(value)) {
        result.push(value)
      }
    }
  }

  return result
}

// 示例用法
// const numbers = [1, 2, 3];
// const letters = ['a', 'b', 'c'];
// const result = union(numbers, letters);

// console.log(result); // 输出: [1, 2, 3, 'a', 'b', 'c']
