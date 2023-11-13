export function tail<T>(arr: T[]): T[] {
  return arr.slice(1)
}

// 示例用法
// const numbers = [1, 2, 3, 4, 5];
// const result = tail(numbers);
//
// console.log(result); // 输出: [2, 3, 4, 5]
