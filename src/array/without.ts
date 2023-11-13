export function without<T>(arr: T[], ...valuesToExclude: T[]): T[] {
  return arr.filter((value) => !valuesToExclude.includes(value))
}

// 示例用法
// const numbers = [1, 2, 3, 4, 5];
// const result = without(numbers, 2, 4);

// console.log(result); // 输出: [1, 3, 5]
