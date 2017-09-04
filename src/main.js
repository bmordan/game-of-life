const Grid = require('./grid')
const seedGrid = require('./seed-grid')
const yo = require('yo-yo')

const grid = seedGrid(new Grid({rows: 100, columns: 100}))

document.addEventListener('DOMContentLoaded', function () {
  const el = generateDOMgrid(grid)

  document.body.appendChild(el)

  regenerateDOMgrid(el, grid)
})

function generateDOMgrid (grid) {
  const DOMgrid = []

  Object.keys(grid.cells).forEach((cellRef) => {
    const [x, y] = grid.cells[cellRef].location
    if (!DOMgrid[y]) DOMgrid[y] = []
    if (!DOMgrid[y][x]) DOMgrid[y] = [grid.cells[cellRef]]
    if (DOMgrid[y][x]) DOMgrid[y].push(grid.cells[cellRef])
  })

  return yo`<table id='grid'>${
    DOMgrid.map(row => {
      return yo`<tr>${row.map(cell => {
        return yo`<td class="${cell.status() ? 'alive' : ''} fade"></td>`
      })}</tr>`
    })
  }</table>`
}

function regenerateDOMgrid (el, grid) {
  const nextGrid = new Grid(grid)

  const nextDOMgrid = generateDOMgrid(nextGrid)

  yo.update(el, nextDOMgrid)

  setTimeout(function () {
    regenerateDOMgrid(el, nextGrid)
  }, 50)
}
