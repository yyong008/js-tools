type Comparator<T> = (a: T, b: T) => boolean

export function differenceWith<T>(
  arr1: T[],
  arr2: T[],
  comparator: Comparator<T>
): T[] {
  return arr1.filter((item1) => !arr2.some((item2) => comparator(item1, item2)))
}

// 示例用法
// const array1 = [{ x: 1, y: 2 }, { x: 2, y: 3 }];
// const array2 = [{ x: 1, y: 2 }];

// const result = differenceWith(array1, array2, (a, b) => a.x === b.x && a.y === b.y);
// console.log(result); // 输出: [{ x: 2, y: 3 }]
