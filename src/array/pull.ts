export function pull<T>(arr: T[], ...values: T[]): T[] {
  return arr.filter((element) => !values.includes(element))
}

// 示例用法
// const numbers = [1, 2, 3, 4, 3, 5];
// const result = pull(numbers, 3);

// console.log(result); // 输出: [1, 2, 4, 5]
