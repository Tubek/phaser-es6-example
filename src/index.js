import Preloader from './states/Preloader'
import Boot from './states/Boot'
import Game from './states/Game'
import properties from './properties'

class Main extends Phaser.Game {

  setupStates() {
    this.state.add('boot', Boot)
    this.state.add('preloader', Preloader)
    this.state.add('game', Game)
  }

  constructor() {
    super(properties.size.x, properties.size.y, Phaser.AUTO, 'game')
    this.setupStates()

    this.state.start('boot')
  }
}

new Main();
