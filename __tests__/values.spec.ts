import { expect, it, describe } from 'vitest'
import { values } from '../src/values'

describe('test sample', () => {
  const users = {
    '25': [
      { name: 'Bob', age: 25 },
      { name: 'David', age: 25 },
    ],
    '30': [
      { name: 'Alice', age: 30 },
      { name: 'Charlie', age: 30 },
    ],
  }

  expect(values(users)).toEqual([
    [
      { name: 'Bob', age: 25 },
      { name: 'David', age: 25 },
    ],
    [
      { name: 'Alice', age: 30 },
      { name: 'Charlie', age: 30 },
    ],
  ])

  it('test in values with inline snapshot', () => {
    expect(values(users)).toMatchInlineSnapshot(`
      [
        [
          {
            "age": 25,
            "name": "Bob",
          },
          {
            "age": 25,
            "name": "David",
          },
        ],
        [
          {
            "age": 30,
            "name": "Alice",
          },
          {
            "age": 30,
            "name": "Charlie",
          },
        ],
      ]
    `)
  })
})
