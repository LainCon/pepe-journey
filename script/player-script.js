let playerCanvas = document.getElementById('player-layer');
let playerCtxt = playerCanvas.getContext('2d');
let playerSprite = new Image();
let sx = 0;
let sy = 0;
let sw = 40;
let sh = 80;
let posX = 200;
let posY = 200;
let dw = 40;
let dh = 60;
playerSprite.src = './media/pepe-sprite.png'
let walkAudio = document.createElement('audio');
walkAudio.src = './media/walk.mp3';
walkAudio.type = 'audio/mp3';
walkAudio.playbackRate = 1.5;


function generatePepe(){
    playerCtxt.drawImage(playerSprite, sx, sy, sw, sh, posX, posY, dw, dh );
}

function runDown() {
    sy = 0;
    sx += 40;
    posY += 10;
    if (posY >= 500) {
      posY = 0;
    }
    if (playerSprite.width - sx < 40 || sx >= playerSprite.width) {
      sx = 0;
    }
  }
  
  function runUp() {
    sy = 80;
    sx += 40;
    posY -= 10;
    if (posY <= 0) {
      posY = 460;
    }
    if (playerSprite.width - sx < 40 || sx >= playerSprite.width) {
      sx = 0;
    }
  }
  
  function runLeft() {
    sy = 152;
    sx += 38;
    posX -= 10;
    if (posX <= 0) {
      posX = 480;
    }
    if (playerSprite.width - sx < 118 || sx >= playerSprite.width) {
      sx = 0;
    }
  
  }
  
  function runRight() {
    sy = 230;
    sx += 42;
    posX += 10;
    if (posX >= 500) {
      posX = 0;
    }
    if (playerSprite.width - sx < 118 || sx >= playerSprite.width) {
      sx = 0;
    }
  }

  
function pepeMove(e) {
    let moveFlag = false;
    if (e.code == 'ArrowDown') {
      runDown();
      moveFlag = true;
    }
    else if (e.code == 'ArrowUp') {
      runUp();
      moveFlag = true;
    }
    else if (e.code == 'ArrowLeft') {
      runLeft();
      moveFlag = true;
    }
    else if (e.code == 'ArrowRight') {
      runRight();
      moveFlag = true;
    }
    
    playerCtxt.clearRect(0, 0, playerCanvas.width, playerCanvas.height);
    if(moveFlag && rangeCheck(e.code)){
      walkAudio.play();
      checkInteraction();
    }
    generatePepe();

}


function drainLife(){
  health -= 5;
  hydration -= 10;
  stomach -= 10;
  generateHudBg();
}

setInterval(drainLife, 30000);

playerSprite.addEventListener('load', generatePepe);
window.addEventListener('keydown', pepeMove);