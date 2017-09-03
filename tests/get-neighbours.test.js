const getNeighbours = require('../src/get-neighbours')
const Cell = require('../src/cell')

describe('getNeighbours', () => {
  const cell = new Cell(5, 5)
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
  test('should calculate 8 neignbouring coordinates from cell location', () => {
    expect(getNeighbours(cell.location)).toEqual(testNeighbours)
  })
})
