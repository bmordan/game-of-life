module.exports = function getNeighbours (grid, location) {
  let [x, y] = grid.cells[location].location

  // simple x wrapping
  if (x < 0) x = grid.columns.length - 1
  if (x > grid.columns.length - 1) x = 0

  // simple y wrapping
  if (y < 0) x = grid.rows.length - 1
  if (y > grid.rows.length - 1) y = 0

  return [
    [x - 1, y - 1],
    [x, y - 1],
    [x + 1, y - 1],
    [x - 1, y],
    [x + 1, y],
    [x - 1, y + 1],
    [x, y + 1],
    [x + 1, y + 1]
  ]
}
