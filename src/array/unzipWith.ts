type CustomFunction<T, R> = (...args: T[]) => R

export function unzipWith<T, R>(
  customFunction: CustomFunction<T, R>,
  ...arrays: T[][]
): R[] {
  const maxLength = Math.max(...arrays.map((arr) => arr.length))

  return Array.from({ length: maxLength }, (_, index) =>
    customFunction(...arrays.map((arr) => arr[index]))
  )
}

// 示例用法
// const numbers = [1, 2, 3];
// const letters = ['a', 'b', 'c'];

// const result = unzipWith((num, letter) => num + letter, numbers, letters);

// console.log(result);
