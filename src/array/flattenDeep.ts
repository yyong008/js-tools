export function flattenDeep<T>(arr: (T | T[])[]): T[] {
  const result: T[] = []

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flattenDeep(item)) // 递归调用 flattenDeep 处理嵌套数组
    } else {
      result.push(item)
    }
  })

  return result
}

// 示例用法
// const deeplyNestedArray = [1, [2, [3, [4, 5], 6], 7]];
// const flattenedArray = flattenDeep(deeplyNestedArray);

// console.log(flattenedArray); // 输出: [1, 2, 3, 4, 5, 6, 7]
