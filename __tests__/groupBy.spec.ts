import { expect, it, describe } from 'vitest'
import { groupBy } from '../src/groupBy'
import { values } from '../src/values'

describe('test sample', () => {
  const data = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 25 },
  ]
  it('simple usage', () => {
    expect(groupBy(data, 'age')).toEqual({
      '25': [
        { name: 'Bob', age: 25 },
        { name: 'David', age: 25 },
      ],
      '30': [
        { name: 'Alice', age: 30 },
        { name: 'Charlie', age: 30 },
      ],
    })
  })

  it('simple usage', () => {
    expect(values(groupBy(data, 'age'))).toEqual([
      [
        { name: 'Bob', age: 25 },
        { name: 'David', age: 25 },
      ],
      [
        { name: 'Alice', age: 30 },
        { name: 'Charlie', age: 30 },
      ],
    ])
  })

  it('simple usage snapshot', () => {
    expect(groupBy(data, 'age')).toMatchInlineSnapshot(`
      {
        "25": [
          {
            "age": 25,
            "name": "Bob",
          },
          {
            "age": 25,
            "name": "David",
          },
        ],
        "30": [
          {
            "age": 30,
            "name": "Alice",
          },
          {
            "age": 30,
            "name": "Charlie",
          },
        ],
      }
    `)
  })
})
