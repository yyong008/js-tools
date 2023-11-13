type Comparator<T> = (value: T) => number

export function sortedLastIndexBy<T>(
  arr: T[],
  value: T,
  comparator: Comparator<T>
): number {
  let low = 0
  let high = arr.length

  while (low < high) {
    const mid = Math.floor((low + high) / 2)

    if (comparator(arr[mid]) <= comparator(value)) {
      low = mid + 1
    } else {
      high = mid
    }
  }

  return low
}

// 示例用法
// const objects = [{ x: 1 }, { x: 3 }, { x: 5 }, { x: 7 }];
// const index = sortedLastIndexBy(objects, { x: 4 }, (obj) => obj.x);

// console.log(index); // 输出: 2 (index at which { x: 4 } should be inserted to maintain sorted order)
