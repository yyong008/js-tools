type Predicate<T> = (value: T, index: number, array: T[]) => boolean

export function dropWhile<T>(arr: T[], predicate: Predicate<T>): T[] {
  let startIndex = 0

  while (
    startIndex < arr.length &&
    predicate(arr[startIndex], startIndex, arr)
  ) {
    startIndex++
  }

  return arr.slice(startIndex)
}

// 示例用法
// const numbers = [1, 2, 3, 4, 5];
// const result = dropWhile(numbers, (num) => num < 3);

// console.log(result); // 输出: [3, 4, 5]
