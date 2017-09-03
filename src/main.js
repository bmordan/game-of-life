const Grid = require('./grid')
const seedGrid = require('./seed-grid')
const yo = require('yo-yo')

const grid = seedGrid(new Grid({rows: 100, columns: 100}))

document.addEventListener('DOMContentLoaded', function () {
  const firstGeneration = generateDOMgrid(grid)

  document.body.appendChild(firstGeneration)

  regenerateDOMgrid(grid)
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

function regenerateDOMgrid (grid) {
  const oldGrid = document.getElementById('grid')

  const nextGrid = new Grid(grid)

  const nextDOMgrid = generateDOMgrid(nextGrid)

  document.body.replaceChild(nextDOMgrid, oldGrid)

  setTimeout(function () {
    regenerateDOMgrid(nextGrid)
  }, 100)
}
