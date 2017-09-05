const getNeighbours = require('../src/get-neighbours')
const Grid = require('../src/grid')

const grid = new Grid({rows: 10, columns: 10})
grid.cells['5:5'].comeToLife()

describe('getNeighbours', () => {
  test('should calculate 8 neignbouring coordinates from cell location', () => {
    const grid = new Grid({rows: 10, columns: 10})
    const testNeighbours = [
      [4, 4],
      [5, 4],
      [6, 4],
      [4, 5],
      [6, 5],
      [4, 6],
      [5, 6],
      [6, 6]
    ]

    expect(getNeighbours(grid, '5:5')).toEqual(testNeighbours)
  })

  test('should wrap x when reaching the edge of the board', () => {
    const grid = new Grid({rows: 10, columns: 10})
    const testWrappedNeighbours = [
      [9, 4],
      [0, 4],
      [1, 4],
      [9, 5],
      [1, 5],
      [9, 6],
      [0, 6],
      [1, 6]
    ]

    expect(getNeighbours(grid, '0:5')).toEqual(testWrappedNeighbours)
  })

  test('should wrap x & y when reaching the edges of the board', () => {
    const grid = new Grid({rows: 10, columns: 10})
    const testWrappedNeighbours = [
      [9, 9],
      [0, 9],
      [1, 9],
      [9, 0],
      [1, 0],
      [9, 1],
      [0, 1],
      [1, 1]
    ]

    expect(getNeighbours(grid, '0:0')).toEqual(testWrappedNeighbours)
  })
})
