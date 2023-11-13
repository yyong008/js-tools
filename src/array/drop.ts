export function drop<T>(arr: T[], n: number = 1): T[] {
  return arr.slice(n)
}

// // 示例用法
// const numbers = [1, 2, 3, 4, 5];
// const result = drop(numbers, 2);

// console.log(result); // 输出: [3, 4, 5]
