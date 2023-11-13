type KeyValuePair<T> = [string, T]

export function fromPairs<T>(pairs: KeyValuePair<T>[]): { [key: string]: T } {
  return pairs.reduce(
    (result, [key, value]) => {
      result[key] = value
      return result
    },
    {} as { [key: string]: T }
  )
}

// 示例用法
// const pairs: KeyValuePair<number>[] = [['a', 1], ['b', 2], ['c', 3]];
// const result = fromPairs(pairs);

// console.log(result); // 输出: { a: 1, b: 2, c: 3 }
