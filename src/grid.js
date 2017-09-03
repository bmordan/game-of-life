const Cell = require('./cell')
const getNeighbours = require('./get-neighbours')

class Grid {
  constructor (grid) {
    this.rows = grid && grid.rows || 100
    this.columns = grid && grid.columns || 100
    this.cells = grid.cells ? nextGenerationCells(grid) : generateCells(this.rows, this.columns)
  }

  cellAt (x, y) {
    return this.cells[`${x}:${y}`]
  }
}

function generateCells (rows, columns) {
  const gridOfCells = {}

  new Array(rows).fill(0).forEach((n, y) => {
    new Array(columns).fill(0).forEach((n, x) => {
      gridOfCells[`${x}:${y}`] = new Cell(x, y)
    })
  })

  return gridOfCells
}

function nextGenerationCells (grid) {
  const nextGenerationCells = {}

  Object.keys(grid.cells).forEach(location => {
    const neighbours = getNeighbours(grid, location)
      .map(([x, y]) => {
        const cell = grid.cellAt(x, y)
        return cell && cell.lifeStatus
      })
      .filter(neighbour => neighbour)
      .length

    if (neighbours < 2 || neighbours > 3) grid.cells[location].die()
    if (neighbours === 3) grid.cells[location].comeToLife()

    nextGenerationCells[location] = grid.cells[location]
  })

  return nextGenerationCells
}

module.exports = Grid
