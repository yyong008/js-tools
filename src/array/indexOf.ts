export function indexOf<T>(arr: T[], value: T, fromIndex: number = 0): number {
  return arr.indexOf(value, fromIndex)
}

// 示例用法
// const numbers = [1, 2, 3, 4, 5];
// const index = indexOf(numbers, 3);

// console.log(index); // 输出: 2
