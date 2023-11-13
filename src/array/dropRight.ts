export function dropRight<T>(arr: T[], n: number = 1): T[] {
  if (n >= arr.length) {
    return []
  }

  return arr.slice(0, arr.length - n)
}

// 示例用法
// const numbers = [1, 2, 3, 4, 5];
// const result = dropRight(numbers, 2);

// console.log(result); // 输出: [1, 2, 3]
