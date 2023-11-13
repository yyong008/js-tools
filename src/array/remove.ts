type Predicate<T> = (value: T) => boolean

export function remove<T>(arr: T[], predicate: Predicate<T>): T[] {
  const removed: T[] = []
  let i = arr.length

  while (i--) {
    if (predicate(arr[i])) {
      removed.unshift(...arr.splice(i, 1))
    }
  }

  return removed
}

// 示例用法
// const numbers = [1, 2, 3, 4, 3, 5];
// const removed = remove(numbers, (num) => num === 3);

// console.log(numbers); // 输出: [1, 2, 4, 5]
// console.log(removed); // 输出: [3, 3]
