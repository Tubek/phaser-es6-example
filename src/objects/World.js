class World {

  constructor(game) {
    this.game = game

    game.world.setBounds(0, 0, game.width, game.height)
    game.add.tileSprite(0, 0, game.width, game.height, 'earth')
  }
}

export default World
