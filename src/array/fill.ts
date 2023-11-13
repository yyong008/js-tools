export function fill<T>(
  arr: T[],
  value: T,
  start: number = 0,
  end: number = arr.length
): T[] {
  return arr.fill(value, start, end)
}

// 示例用法
// const numbers = [1, 2, 3, 4, 5];
// const result = fill(numbers, 0, 1, 3);

// console.log(result); // 输出: [1, 0, 0, 4, 5]
