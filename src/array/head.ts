export function head<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined
}

// 示例用法
// const numbers = [1, 2, 3, 4, 5];
// const firstElement = head(numbers);

// console.log(firstElement); // 输出: 1
