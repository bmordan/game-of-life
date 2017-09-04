module.exports = function getNeighbours (grid, location) {
  let [x, y] = grid.cells[location].location

  function wrapMyX (x) {
    if (x < 0) return grid.columns.length - 1
    if (x > grid.columns.length - 1) return 0
    return x
  }

  function wrapMyY (x) {
    if (y < 0) return grid.rows.length - 1
    if (y > grid.rows.length - 1) return 0
    return y
  }

  return [
    [wrapMyX(x) - 1, wrapMyY(y) - 1],
    [wrapMyX(x), wrapMyY(y) - 1],
    [wrapMyX(x) + 1, wrapMyY(y) - 1],
    [wrapMyX(x) - 1, wrapMyY(y)],
    [wrapMyX(x) + 1, wrapMyY(y)],
    [wrapMyX(x) - 1, wrapMyY(y) + 1],
    [wrapMyX(x), wrapMyY(y) + 1],
    [wrapMyX(x) + 1, wrapMyY(y) + 1]
  ]
}
