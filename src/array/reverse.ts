export function reverse<T>(arr: T[]): T[] {
  return arr.slice().reverse() // Create a shallow copy to avoid modifying the original array
}

// 示例用法
// const numbers = [1, 2, 3, 4, 5];
// const reversed = reverse(numbers);

// console.log(reversed); // 输出: [5, 4, 3, 2, 1]
// console.log(numbers); // 输出: [1, 2, 3, 4, 5] (original array remains unchanged)
