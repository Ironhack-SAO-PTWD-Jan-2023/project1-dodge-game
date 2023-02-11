const game = new Game();

const startScreen = document.querySelector('#start-screen');
const gameScreen = document.querySelector('#game-screen');


const startBtn = document.querySelector('#start-screen button');
startBtn.addEventListener('click', () => {
  game.start();
})

document.addEventListener('keydown', (event) => {
  if (!game.playing) return;
  switch(event.key) {
    case 'ArrowLeft':
      game.player.moveLeft();
      break;
    case 'ArrowRight':
      game.player.moveRight();
      break;
    case 'ArrowUp':
      game.player.moveUp();
      break;
    case 'ArrowDown':
      game.player.moveDown();
      break;
    
  }
})