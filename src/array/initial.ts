export function initial<T>(arr: T[]): T[] {
  return arr.slice(0, -1)
}

// 示例用法
// const numbers = [1, 2, 3, 4, 5];
// const result = initial(numbers);

// console.log(result); // 输出: [1, 2, 3, 4]
