type Comparator<T> = (a: T, b: T) => number

export function sortedUniqBy<T>(arr: T[], comparator: Comparator<T>): T[] {
  return arr.reduce((result, value) => {
    if (
      result.length === 0 ||
      comparator(result[result.length - 1], value) !== 0
    ) {
      result.push(value)
    }
    return result
  }, [] as T[])
}

// 示例用法
// const objects = [{ x: 1 }, { x: 2 }, { x: 2 }, { x: 3 }];
// const result = sortedUniqBy(objects, (a, b) => a.x - b.x);

// console.log(result); // 输出: [{ x: 1 }, { x: 2 }, { x: 3 }] (sorted array with unique values based on 'x')
