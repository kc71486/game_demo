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

	// Step 3 code goes here

	// Step 4.1 code goes here

	// Step 4.3 code goes here

	// Step 5.1 code goes here

	// Step 5.2 code goes here

	// Step 6.1 code goes here

	// Step 7.1 code goes here
}

function update() {
	// Step 4.2 code goes here
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
