export function lastIndexOf<T>(
  arr: T[],
  value: T,
  fromIndex: number = arr.length - 1
): number {
  return arr.lastIndexOf(value, fromIndex)
}

// 示例用法
// const numbers = [1, 2, 3, 4, 3, 5];
// const lastIndex = lastIndexOf(numbers, 3);

// console.log(lastIndex); // 输出: 4
