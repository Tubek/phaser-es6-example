class Tank {

  constructor(game, id, x, y) {
    this.rotationSpeed = 4
    this.speed = 300
    this.breakingSpeed = 4
    this.currentSpeed = 0

    this.game = game
    this.id = id

    this.item = this.game.add.sprite(x, y, 'tank', 'tank1')
    this.item.anchor.setTo(0.5, 0.5)

    this.setupPhysics()
  }

  setupPhysics() {
    this.game.physics.enable(this.item, Phaser.Physics.ARCADE)

    this.item.body.drag.set(0.2)
    this.item.body.maxVelocity.setTo(400, 400)
    this.item.body.collideWorldBounds = true

    this.item.body.drag.set(0.2)
    this.item.body.maxVelocity.setTo(400, 400)
    this.item.body.collideWorldBounds = true
  }

  update(left, right, up) {
    if (left) {
      this.rotate(false)
    }
    
    if (right) {
      this.rotate(true)
    }

    if (up) {
      this.move()
    } else {
      this.break();
    }

    if (this.currentSpeed > 0) {
      this.game.physics.arcade.velocityFromRotation(this.item.rotation, this.currentSpeed, this.item.body.velocity)
    }
  }

  move() {
    this.currentSpeed = this.speed
  }

  break () {
    if (this.currentSpeed > 0) {
      this.currentSpeed -= this.breakingSpeed
    }
  }

  rotate(clockwise) {
    this.item.angle += clockwise ? this.rotationSpeed : -this.rotationSpeed
  }

}

export default Tank
