export function takeRight<T>(arr: T[], n: number): T[] {
  return arr.slice(-n)
}

// 示例用法
// const numbers = [1, 2, 3, 4, 5];
// const result = takeRight(numbers, 3);
//
// console.log(result); // 输出: [3, 4, 5]
//
