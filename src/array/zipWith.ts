type ZipWithFunction<T> = (...values: T[]) => unknown

export function zipWith<T>(
  zipFunction: ZipWithFunction<T>,
  ...arrays: T[][]
): unknown[] {
  const maxLength = Math.max(...arrays.map((arr) => arr.length))

  return Array.from({ length: maxLength }, (_, index) =>
    zipFunction(...arrays.map((arr) => arr[index]))
  )
}

// 示例用法
// const add = (a: number, b: number, c: number) => a + b + c;

// const numbers1 = [1, 2, 3];
// const numbers2 = [4, 5, 6];
// const numbers3 = [7, 8, 9];

// const result = zipWith(add, numbers1, numbers2, numbers3);

// console.log(result); // 输出: [12, 15, 18]
