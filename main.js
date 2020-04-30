const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');

const game = new Game($canvas);
game.background.drawInstructions()



const $buttonStart = document.getElementById('start');
const $buttonPause = document.getElementById('pause');
const $buttonReset = document.getElementById('reset');
const $buttonLeft = document.getElementById('left');
const $buttonRight = document.getElementById('right');

$buttonStart.addEventListener('click', () => {
  game.start();
});

$buttonPause.addEventListener('click', () => {
  game.pause();
});

$buttonReset.addEventListener('click', () => {
  game.reset();
});

$buttonLeft.addEventListener('click', () => {
  game.character.moveLeft();
});

$buttonRight.addEventListener('click', () => {
  game.character.moveRight();
});