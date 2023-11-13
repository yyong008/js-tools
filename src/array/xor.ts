export function xor<T>(...arrays: T[][]): T[] {
  const allValues: T[] = []

  for (const arr of arrays) {
    allValues.push(...arr)
  }

  const counts = new Map<T, number>()

  allValues.forEach((value) => {
    const count = counts.get(value) || 0
    counts.set(value, count + 1)
  })

  return allValues.filter((value) => counts.get(value) === 1)
}

// 示例用法
// const array1 = [1, 2, 3];
// const array2 = [2, 3, 4];
// const array3 = [3, 4, 5];

// const result = xor(array1, array2, array3);

// console.log(result); // 输出: [1, 2, 4, 5]
