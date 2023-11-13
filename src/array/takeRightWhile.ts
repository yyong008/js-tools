type Predicate<T> = (value: T) => boolean

export function takeRightWhile<T>(arr: T[], predicate: Predicate<T>): T[] {
  let index = arr.length

  while (index > 0 && predicate(arr[index - 1])) {
    index--
  }

  return arr.slice(index)
}

// 示例用法
// const numbers = [1, 2, 3, 4, 5];
// const result = takeRightWhile(numbers, (num) => num > 2);

// console.log(result); // 输出: [3, 4, 5]
