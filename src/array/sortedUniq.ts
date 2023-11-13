type Comparator<T> = (a: T, b: T) => number

function sortedUniq<T>(arr: T[], comparator: Comparator<T>): T[] {
  return arr.reduce((result, value) => {
    if (
      result.length === 0 ||
      comparator(result[result.length - 1], value) !== 0
    ) {
      result.push(value as never)
    }
    return result
  }, [])
}

// 示例用法
const numbers = [1, 2, 2, 3, 4, 4, 5]
const result = sortedUniq(numbers, (a, b) => a - b)

console.log(result) // 输出: [1, 2, 3, 4, 5] (sorted array with unique values)
