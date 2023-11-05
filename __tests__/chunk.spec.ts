import { expect, it, describe } from 'vitest'
import { chunk } from '../src/chunk'

describe("chunk simple usage", () => {
  it("simple usage", () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it("chunk base use age", () => {
    expect(chunk([1, 2, 3, 4, 5], 3)).toMatchInlineSnapshot(`
    [
      [
        1,
        2,
        3,
      ],
      [
        4,
        5,
      ],
    ]
  `);
  });
})

