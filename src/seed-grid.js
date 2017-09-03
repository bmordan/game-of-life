const shapes = require('./shapes')

module.exports = function (grid) {
  const x = grid.rows / 2
  const y = grid.columns / 2
  // This is sketchy
  Object.keys(shapes).forEach((shape, i) => {
    shapes[shape](x - (i * 3), y - (i * 3)).forEach(location => {
      grid.cells[location].comeToLife()
    })
  })
  // 
  // Object.keys(shapes).forEach((shape, i) => {
  //   shapes[shape](x + (i * 3), y - (i * 4)).forEach(location => {
  //     grid.cells[location].comeToLife()
  //   })
  // })
  return grid
}
