export function flatten<T>(arr: (T | T[])[]): T[] {
  const result: T[] = []

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flatten(item)) // 递归调用 flatten 处理嵌套数组
    } else {
      result.push(item)
    }
  })

  return result
}

// 示例用法
// const nestedArray = [1, [2, [3, 4], 5], 6];
// const flattenedArray = flatten(nestedArray);

// console.log(flattenedArray); // 输出: [1, 2, 3, 4, 5, 6]
