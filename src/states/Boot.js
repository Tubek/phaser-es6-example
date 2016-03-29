import properties from './../properties'

class Boot extends Phaser.State {

  create() {
    this.game.sound.mute = properties.mute
    this.game.scale.pageAlignHorizontally = true

    this.game.state.start('preloader')
  }

  preload() {
    this.load.image('preloader', 'images/preloader.gif')
  }

}

export default Boot
