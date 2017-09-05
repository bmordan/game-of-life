module.exports = function getNeighbours (grid, location) {
  let [x, y] = grid.cells[location].location

  const neighbours = [
    [x - 1, y - 1],
    [x, y - 1],
    [x + 1, y - 1],
    [x - 1, y],
    [x + 1, y],
    [x - 1, y + 1],
    [x, y + 1],
    [x + 1, y + 1]
  ].map(([x, y]) => {
    let wrappedX = x
    let wrappedY = y
    if (x < 0) wrappedX = grid.columns - 1
    else if (x === grid.columns) wrappedX = 0
    if (y < 0) wrappedY = grid.rows - 1
    else if (y === grid.rows) wrappedY = 0
    return [wrappedX, wrappedY]
  })

  return neighbours
}
