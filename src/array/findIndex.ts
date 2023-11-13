type Predicate<T> = (value: T, index: number, array: T[]) => boolean

export function findIndex<T>(arr: T[], predicate: Predicate<T>): number {
  const index = arr.findIndex((value, i, array) => predicate(value, i, array))
  return index !== -1 ? index : -1
}

// 示例用法
// const numbers = [1, 2, 3, 4, 5];
// const index = findIndex(numbers, (num) => num === 3);

// console.log(index); // 输出: 2
