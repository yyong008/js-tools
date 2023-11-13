type Predicate<T> = (value: T, index: number, array: T[]) => boolean

export function findLastIndex<T>(arr: T[], predicate: Predicate<T>): number {
  const reversedArray = [...arr].reverse() // 创建数组的副本并反转
  const index = reversedArray.findIndex((value, i, array) =>
    predicate(value, i, array)
  )
  return index !== -1 ? arr.length - 1 - index : -1
}

// 示例用法
// const numbers = [1, 2, 3, 4, 5, 3];
// const lastIndex = findLastIndex(numbers, (num) => num === 3);

// console.log(lastIndex); // 输出: 5
