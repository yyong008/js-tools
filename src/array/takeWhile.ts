type Predicate<T> = (value: T) => boolean

export function takeWhile<T>(arr: T[], predicate: Predicate<T>): T[] {
  let index = 0

  while (index < arr.length && predicate(arr[index])) {
    index++
  }

  return arr.slice(0, index)
}

// 示例用法
// const numbers = [1, 2, 3, 4, 5];
// const result = takeWhile(numbers, (num) => num < 4);
//
// console.log(result); // 输出: [1, 2, 3]
