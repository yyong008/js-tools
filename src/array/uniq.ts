export function uniq<T>(arr: T[]): T[] {
  return Array.from(new Set(arr))
}

// 示例用法
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const result = uniq(numbers);
//
// console.log(result); // 输出: [1, 2, 3, 4, 5]
