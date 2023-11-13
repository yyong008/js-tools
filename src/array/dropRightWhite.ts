type Predicate<T> = (value: T, index: number, array: T[]) => boolean

export function dropRightWhile<T>(arr: T[], predicate: Predicate<T>): T[] {
  let lastIndex = arr.length - 1

  while (lastIndex >= 0 && predicate(arr[lastIndex], lastIndex, arr)) {
    lastIndex--
  }

  return arr.slice(0, lastIndex + 1)
}

// 示例用法
// const numbers = [1, 2, 3, 4, 5];
// const result = dropRightWhile(numbers, (num) => num > 3);

// console.log(result); // 输出: [1, 2, 3]
