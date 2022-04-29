const game = new Phaser.Game({
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
	default: 'arcade',
	arcade: {
		gravity: { y: 300 },
		debug: false
	}
	},
	scene: { create, preload, update },
})

// arrow function is not allowed, because of `this` binding
function preload() {
	// Step 1.1 code goes here
	this.load.setBaseURL('https://labs.phaser.io')
	this.load.image('sky', 'src/games/firstgame/assets/sky.png')
	this.load.image('ground', 'src/games/firstgame/assets/platform.png')
	this.load.image('star', 'src/games/firstgame/assets/star.png')
	this.load.image('bomb', 'src/games/firstgame/assets/bomb.png')
	this.load.spritesheet('dude',
		'src/games/firstgame/assets/dude.png',
		{ frameWidth: 32, frameHeight: 48 }
	)
	// Step 8.1 code goes here
}

function create() {
	// Step 1.2 code goes here
	this.add.image(400, 300, 'sky')
	// Step 2 code goes here
	platforms = this.physics.add.staticGroup()
	platforms.create(400, 568, 'ground').setScale(2).refreshBody()
	platforms.create(600, 400, 'ground').setScale(1, .5).refreshBody()
	platforms.create( 50, 250, 'ground').setScale(1, .5).refreshBody()
	platforms.create(750, 220, 'ground').setScale(1, .5).refreshBody()
	// Step 3 code goes here
	player = this.physics.add.sprite(100, 450, 'dude')
	player.setBounce(.2)
	player.setCollideWorldBounds(true)
	// Step 4.1 code goes here
	this.anims.create({ frameRate: 10, frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }), key: 'left', repeat: -1 })
	this.anims.create({ frameRate: 20, frames: [ { key: 'dude', frame: 4 } ], key: 'turn', })
	this.anims.create({ frameRate: 10, frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }), key: 'right', repeat: -1 })

	cursors = this.input.keyboard.createCursorKeys()
	// Step 4.3 code goes here

	// Step 5.1 code goes here

	// Step 5.2 code goes here

	// Step 6.1 code goes here

	// Step 7.1 code goes here
}

function update() {
	// Step 4.2 code goes here
	const speed = 160
	if (cursors.left.isDown) {
		player.setVelocityX(-speed)
		player.anims.play('left', true)
	} else if (cursors.right.isDown) {
		player.setVelocityX(speed)
		player.anims.play('right', true)
	} else {
		player.setVelocityX(0)
		player.anims.play('turn')
	}
	if (cursors.up.isDown && player.body.touching.down)
		player.setVelocityY(-330)
}

function collectStar(player, star) {
	star.disableBody(true, true)

	// Step 6.2 code goes here

	// Step 7.2 code goes here

	// Step 8.2 code goes here
}

function hitBomb(player, bomb) {
	gameOver = true

	// Step 7.3 code goes here

	// Step 8.3 code goes here
}
