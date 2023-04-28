let structureCanvas = document.getElementById('solid-structures-layer');
let structureCtxt = structureCanvas.getContext('2d');
let waterfall = new Image();
waterfall.src = './media/waterfall2.png';

let waterfall_sx = 0;
let waterfall_sy = 0;
let waterfall_sw = 40;
let waterfall_sh = 43;
let waterfall_posX = 250;
let waterfall_posY = 250;
let waterfall_width = 80;
let waterfall_height = 80;
let forbiddenRanges = [];
let lastDrinkTime = (new Date()).getTime();

let drinkingWaterAudio = document.createElement('audio');
drinkingWaterAudio.src='./media/drink-water.mp3';
drinkingWaterAudio.type='audio/mp3';
drinkingWaterAudio.playbackRate = 1.5;

function renderWaterfall(){
    structureCtxt.clearRect(0, 0, 500, 500);
    let temp = {};
    temp['x'] = waterfall_posX;
    temp['y'] = waterfall_posY;
    temp['width'] = waterfall_width;
    temp['height'] = waterfall_height;
    temp['type'] = 'waterfall';
    structureCtxt.shadowBlur = 15;
    structureCtxt.shadowColor = '#0df';
    forbiddenRanges.push(temp);
    structureCtxt.drawImage(waterfall, waterfall_sx, waterfall_sy, waterfall_sw, waterfall_sh, waterfall_posX, waterfall_posY, waterfall_width, waterfall_height);
    waterfall_sx += 43;
    if(waterfall_sx>= waterfall.width){
        waterfall_sx = 0;
    }
}

function animateWaterfall(){
    setTimeout(renderWaterfall, 0);
    setTimeout(renderWaterfall, 400);
}


function rangeCheck(keyCode){
    for(let range of forbiddenRanges){
        if(Math.abs(range['x']-posX-dw/2+range['width']/2)<range['width']/2 && Math.abs(range['y']-posY-dh/2+range['height']/2) < range['height']/2){
            //the above line basically compares the distance between the center of the player and center of the solid structure
            //if the x-diff is less than the half the width of the solid structure and if y-diff is less than half the height of the solid structure we consider it collision
            if (keyCode == 'ArrowDown') {
                posY-=10;
              }
              else if (keyCode == 'ArrowUp') {
                posY+=10;
              }
              else if (keyCode == 'ArrowLeft') {
                posX+= 10;
              }
              else if (keyCode == 'ArrowRight') {
                posX-= 10;
              }
              if(range['type']=='waterfall'){
                let tempTime = (new Date()).getTime();
                if(tempTime-lastDrinkTime > 10000){
                    lastDrinkTime = tempTime;
                    drinkingWaterAudio.play();
                    hydration += 10;
                    generateHudBg();
                }
              }
            return false;
        }
        // else if(Math.abs(range['y']-posY)<range['height']){
        //     posY -= 10;
        //     return false;
        // }
    }
    return true;
}

waterfall.addEventListener('load', renderWaterfall);
setInterval(animateWaterfall, 1000);