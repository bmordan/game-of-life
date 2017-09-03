module.exports = class Cell {
  constructor (x, y) {
    x = x || 0
    y = y || 0
    this.lifeStatus = false
    this.location = [x, y]
  }
  status () {
    return this.lifeStatus
  }
  comeToLife () {
    this.lifeStatus = true
  }
  die () {
    this.lifeStatus = false
  }
}
