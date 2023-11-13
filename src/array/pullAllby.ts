type Comparator<T> = (a: T, b: T) => boolean

export function pullAllBy<T>(
  arr: T[],
  values: T[],
  comparator: Comparator<T>
): T[] {
  return arr.filter(
    (element) => !values.some((value) => comparator(element, value))
  )
}

// 示例用法
// const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
// const values = [{ x: 2 }];
// const result = pullAllBy(objects, values, (a, b) => a.x === b.x);

// console.log(result); // 输出: [{ x: 1 }, { x: 3 }]
