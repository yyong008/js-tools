type Comparator<T> = (value: T) => number

export function sortedIndex<T>(
  arr: T[],
  value: T,
  comparator: Comparator<T>
): number {
  let low = 0
  let high = arr.length

  while (low < high) {
    const mid = Math.floor((low + high) / 2)

    if (comparator(arr[mid]) < comparator(value)) {
      low = mid + 1
    } else {
      high = mid
    }
  }

  return low
}

// 示例用法
// const numbers = [1, 3, 5, 7, 9];
// const index = sortedIndex(numbers, 6, (num) => num);

// console.log(index); // 输出: 3 (index at which 6 should be inserted to maintain sorted order)
