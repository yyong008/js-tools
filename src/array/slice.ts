export function slice<T>(
  arr: T[],
  start: number = 0,
  end: number = arr.length
): T[] {
  return arr.slice(start, end)
}

// 示例用法
// const numbers = [1, 2, 3, 4, 5];
// const sliced = slice(numbers, 1, 4);

// console.log(sliced); // 输出: [2, 3, 4]
