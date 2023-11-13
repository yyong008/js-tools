type Comparator<T> = (value: T) => number

export function sortedIndexOf<T>(arr: T[], comparator: Comparator<T>): number {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    const comparison = comparator(arr[mid])

    if (comparison < 0) {
      low = mid + 1
    } else if (comparison > 0) {
      high = mid - 1
    } else {
      // Found a match, look for the first occurrence
      while (mid > 0 && comparator(arr[mid - 1]) === 0) {
        mid--
      }
      return mid
    }
  }

  return -1 // Value not found
}

// 示例用法
// const numbers = [1, 2, 2, 3, 4, 5];
// const index = sortedIndexOf(numbers, (num) => num - 2);

// console.log(index); // 输出: 1 (index of the first occurrence of 2 in the sorted array)
