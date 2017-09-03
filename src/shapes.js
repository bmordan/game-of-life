module.exports = {
  square: (x, y) => (
    [
      `${x}:${y}`,
      `${x}:${y + 1}`,
      `${x + 1}:${y + 1}`,
      `${x + 1}:${y}`
    ]
  ),
  loaf: (x, y) => (
    [
      `${x + 1}:${y}`,
      `${x + 2}:${y}`,
      `${x}:${y + 1}`,
      `${x + 3}:${y + 1}`,
      `${x + 3}:${y + 2}`,
      `${x + 2}:${y + 3}`,
      `${x + 1}:${y + 2}`
    ]
  ),
  boat: (x, y) => (
    [
      `${x}:${y}`,
      `${x + 1}:${y}`,
      `${x + 2}:${y + 1}`,
      `${x + 1}:${y + 2}`,
      `${x}:${y + 1}`
    ]
  ),
  ship: (x, y) => (
    [
      `${x}:${y}`,
      `${x + 1}:${y}`,
      `${x + 2}:${y - 1}`,
      `${x + 2}:${y - 2}`,
      `${x + 1}:${y - 2}`,
      `${x}:${y - 1}`
    ]
  ),
  glider: (x, y) => (
    [
      `${x}:${y}`,
      `${x + 1}:${y}`,
      `${x + 2}:${y}`,
      `${x + 1}:${y + 2}`,
      `${x}:${y - 1}`
    ]
  ),
  rpentomino: (x, y) => (
    [
      `${x + 1}:${y}`,
      `${x + 2}:${y}`,
      `${x}:${y - 1}`,
      `${x + 1}:${y - 1}`,
      `${x + 1}:${y - 2}`
    ]
  ),
  beehive: (x, y) => (
    [
      `${x + 1}:${y}`,
      `${x + 2}:${y}`,
      `${x + 3}:${y + 1}`,
      `${x + 2}:${y + 2}`,
      `${x + 1}:${y + 2}`,
      `${x}:${y + 1}`
    ]
  ),
  tub: (x, y) => (
    [
      `${x + 1}:${y}`,
      `${x + 2}:${y + 1}`,
      `${x + 1}:${y + 2}`,
      `${x}:${y + 1}`
    ]
  )
}
