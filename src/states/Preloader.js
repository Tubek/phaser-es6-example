class Preloader extends Phaser.State {

  update() {
    if (this.ready) {
      this.state.start('game')
    }
  }

  preload() {
    this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader')
    this.load.setPreloadSprite(this.asset)

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this)
    this.loadResources()
  }

  loadResources() {
    this.game.load.atlas('tank', 'images/tanks.png', 'images/tanks.json')
    this.game.load.image('earth', 'images/scorched_earth.png')
  }

  onLoadComplete() {
    this.ready = true
  }

}

export default Preloader
