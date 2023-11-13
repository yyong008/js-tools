export function take<T>(arr: T[], n: number): T[] {
  return arr.slice(0, n)
}

// 示例用法
// const numbers = [1, 2, 3, 4, 5];
// const result = take(numbers, 3);
//
// console.log(result); // 输出: [1, 2, 3]
