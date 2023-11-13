export function flattenDepth<T>(arr: (T | T[])[], depth: number = 1): T[] {
  const result: T[] = []

  arr.forEach((item) => {
    if (Array.isArray(item) && depth > 0) {
      result.push(...flattenDepth(item, depth - 1)) // 递归调用 flattenDepth 处理嵌套数组，并减少深度
    } else {
      result.push(item as T)
    }
  })

  return result
}

// 示例用法
// const deeplyNestedArray = [1, [2, [3, [4, 5], 6], 7]];
// const flattenedArrayDepth1 = flattenDepth(deeplyNestedArray, 1);
// const flattenedArrayDepth2 = flattenDepth(deeplyNestedArray, 2);

// console.log(flattenedArrayDepth1); // 输出: [1, 2, [3, [4, 5], 6], 7]
// console.log(flattenedArrayDepth2); // 输出: [1, 2, 3, [4, 5], 6, 7]
