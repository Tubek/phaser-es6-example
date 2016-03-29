import World from '../objects/World'
import Tank from '../objects/Tank'

export default class Game {

  create() {
    new World(this.game)

    this.tank = new Tank(this.game, 'tank', this.game.world.centerX, this.game.world.centerY)
    this.cursors = this.game.input.keyboard.createCursorKeys()
  }

  update() {
    this.tank.update(this.cursors.left.isDown, this.cursors.right.isDown, this.cursors.up.isDown)
  }
}
