export function join<T>(arr: T[], separator: string = ','): string {
  return arr.join(separator)
}

// 示例用法
// const words = ['Hello', 'World', '!'];
// const result = join(words, ' ');

// console.log(result); // 输出: 'Hello World !'
