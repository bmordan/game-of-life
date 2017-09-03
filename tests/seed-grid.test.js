const seedGrid = require('../src/seed-grid')
const Grid = require('../src/grid')

describe('seedGrid', function () {
  test('Should seed the new grid with live cells', function () {
    const grid = new Grid()
    seedGrid(grid)
    expect(grid.cells['50:50'].lifeStatus).toBe(true)
  })
})
