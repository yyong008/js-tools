type Comparator<T> = (value: T) => unknown

export function intersectionBy<T>(
  comparator: Comparator<T>,
  ...arrays: T[][]
): T[] {
  if (arrays.length === 0) {
    return []
  }

  const result: T[] = arrays[0].filter((value) =>
    arrays.every((arr) =>
      arr.some((elem) => comparator(elem) === comparator(value))
    )
  )

  return result
}

// 示例用法
// const array1 = [{ x: 1 }, { x: 2 }, { x: 3 }];
// const array2 = [{ x: 2 }, { x: 3 }, { x: 4 }];
// const array3 = [{ x: 3 }, { x: 4 }, { x: 5 }];

// const result = intersectionBy((item) => item.x, array1, array2, array3);

// console.log(result); // 输出: [{ x: 3 }]
