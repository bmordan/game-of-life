const Cell = require('../src/cell')

describe('Cell', () => {
  let cell

  beforeEach(() => {
    cell = new Cell()
  })

  test('a new Cell should not be alive', () => {
    expect(cell.lifeStatus).toBe(false)
  })

  test('a new Cell should come to life', () => {
    cell.comeToLife()
    expect(cell.lifeStatus).toBe(true)
  })

  test('a new Cell that is alive can be killed', () => {
    cell.comeToLife()
    expect(cell.lifeStatus).toBe(true)
    cell.die()
    expect(cell.lifeStatus).toBe(false)
  })
})

describe('a cell should have a grid coordinate', () => {
  let cell

  beforeEach(() => {
    cell = new Cell()
  })

  test('new Cells have a coordinate of [0,0]', () => {
    expect(cell.location).toEqual([0, 0])
    const newCell = new Cell(1, 10)
    expect(newCell.location).toEqual([1, 10])
  })
})
