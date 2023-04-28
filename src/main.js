let config = {
    type: Phaser.CANVAS,
    width: 640,
    height:480,
    scene: [Menu,Play],
    highScore: 0

}
// create function in config

let game = new Phaser.Game(config);
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
game.config.highScore = 0;
// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;

//Track a high score that persists across scenes and display it in the UI (5)
//global variable
