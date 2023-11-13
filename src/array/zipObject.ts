export function zipObject<T>(keys: string[], values: T[]): Record<string, T> {
  return keys.reduce(
    (result, key, index) => {
      result[key] = values[index]
      return result
    },
    {} as Record<string, T>
  )
}

// 示例用法
// const keys = ['a', 'b', 'c'];
// const values = [1, 2, 3];

// const result = zipObject(keys, values);

// console.log(result);
