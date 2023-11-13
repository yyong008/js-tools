type Comparator<T> = (value: T) => number

export function sortedLastIndexOf<T>(
  arr: T[],
  comparator: Comparator<T>
): number {
  let low = 0
  let high = arr.length - 1
  let lastIndex = -1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const comparison = comparator(arr[mid])

    if (comparison < 0) {
      low = mid + 1
    } else if (comparison > 0) {
      high = mid - 1
    } else {
      // Found a match, update the lastIndex and continue searching to the right
      lastIndex = mid
      low = mid + 1
    }
  }

  return lastIndex
}

// 示例用法
// const numbers = [1, 2, 2, 3, 4, 5];
// const index = sortedLastIndexOf(numbers, 2, (num) => num - 2);

// console.log(index); // 输出: 2 (index of the last occurrence of 2 in the sorted array)
