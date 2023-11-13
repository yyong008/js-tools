export function last<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[arr.length - 1] : undefined
}

// 示例用法
// const numbers = [1, 2, 3, 4, 5];
// const lastElement = last(numbers);

// console.log(lastElement); // 输出: 5
