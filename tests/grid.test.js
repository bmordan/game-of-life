const Grid = require('../src/grid')
const seedGrid = require('../src/seed-grid')
const shapes = require('../src/shapes')

describe('Grid', () => {
  test('should be able to spawn a starting grid of 100', () => {
    const grid = new Grid()
    expect(Object.keys(grid.cells).length).toBe(10000)
  })

  test('should be able to query cells in the grid', () => {
    const grid = new Grid()
    expect(grid.cellAt(5,5).lifeStatus).toBe(false)
  })

  test('should generate the next moment of life', () => {
    const grid = new Grid()

    shapes['boat'](50, 50).forEach(location => {
      grid.cells[location].comeToLife()
    })

    const nextGenerationCells = new Grid(grid)
    console.log(nextGenerationCells)
    expect(nextGenerationCells.cellAt(50, 50).lifeStatus).toBe(true)
  })
})
