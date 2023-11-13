type Key = string | number

export function zipObjectDeep<T>(keys: Key[], values: T[]): Record<string, T> {
  const result: Record<string, T> = {}

  keys.forEach((key, index) => {
    const keyArray = Array.isArray(key) ? key : [key]

    let currentObject = result
    keyArray.forEach((nestedKey, nestedIndex) => {
      if (nestedIndex === keyArray.length - 1) {
        currentObject[nestedKey.toString()] = values[index]
      } else {
        currentObject[nestedKey.toString()] =
          currentObject[nestedKey.toString()]
        currentObject = currentObject[nestedKey.toString()] as Record<string, T>
      }
    })
  })

  return result
}

// 示例用法
// const keys = ['a', ['b', 'c'], 'd.e'];
// const values = [1, 2, 3];

// const result = zipObjectDeep<number>(keys, values);

// console.log(result);
