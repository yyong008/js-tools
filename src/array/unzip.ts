export function unzip<T>(...arrays: T[][]): T[][] {
  const maxLength = Math.max(...arrays.map((arr) => arr.length))

  return Array.from({ length: maxLength }, (_, index) =>
    arrays.map((arr) => arr[index])
  )
}

// 示例用法
// const numbers = [1, 2, 3];
// const letters = ['a', 'b', 'c'];
// const result = unzip(numbers, letters);

// console.log(result);
