export function intersection<T>(...arrays: T[][]): T[] {
  if (arrays.length === 0) {
    return []
  }

  const result: T[] = arrays[0].filter((value) =>
    arrays.every((arr) => arr.includes(value))
  )

  return result
}

// 示例用法
// const array1 = [1, 2, 3, 4];
// const array2 = [2, 3, 5];
// const array3 = [3, 4, 6];

// const result = intersection(array1, array2, array3);

// console.log(result); // 输出: [3]
