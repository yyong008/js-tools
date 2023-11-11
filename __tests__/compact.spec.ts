import { expect, it, describe } from 'vitest'
import { compact } from '../src/compact'

describe('test sample', () => {
  const arr = [0, 1, false, 2, '', 3, null, '', undefined, NaN]
  it('js all falsy', () => {
    expect(compact(arr)).toEqual([1, 2, 3])
  })

  it('js all falsy snapshot', () => {
    expect(compact(arr)).toMatchInlineSnapshot(`
      [
        1,
        2,
        3,
      ]
    `)
  })
})
