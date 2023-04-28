let resourcesCanvas = document.getElementById('resources-layer');
let resourcesCtxt = resourcesCanvas.getContext('2d');
let appleImg = new Image();
let resources = {};
let appleEatSound = document.createElement('audio');
appleEatSound.src = './media/apple-eat.mp3';
appleEatSound.type = 'audio/mp3';
appleEatSound.playbackRate = 2.5;

appleImg.src = './media/apple.png';
function generateApple(){
    if(!resources.apple){
        resources['apple'] = {};
    }
    if(Object.keys(resources.apple).length > 10){
        return;
    }
    let tempX = Math.floor(Math.random() * 400);
    let tempY = Math.floor(Math.random() * 400);
    resourcesCtxt.shadowBlur = 15;
    resourcesCtxt.shadowOffsetX = 0;
    resourcesCtxt.shadowOffsetY = 5;
    resourcesCtxt.shadowColor = '#fda';
    let i = Object.keys(resources['apple']).length;
    resources['apple'][i] = {};
    resources['apple'][i]['x'] = tempX;
    resources['apple'][i]['y'] = tempY;
    resources['apple'][i]['status'] = 'full';
    resourcesCtxt.drawImage(appleImg, tempX, tempY, 40, 40);
}

appleImg.addEventListener('load', generateApple)
setInterval(generateApple, 10000);
// console.log(resources);


function clearResourceItem(resourceGroup, itemIndex){
    appleEatSound.play();
    let targetItemX = resources[resourceGroup][itemIndex]['x'];
    let targetItemY = resources[resourceGroup][itemIndex]['y'];
    resourcesCtxt.clearRect(targetItemX,targetItemY, 40, 40);
    animateAppleEat(targetItemX, targetItemY);
    generateResourceItem(resourceGroup, itemIndex);
}

function generateResourceItem(resourceGroup, itemIndex){
    let tempX = Math.floor(Math.random() * 500);
    let tempY = Math.floor(Math.random() * 500);
    console.log(resources[resourceGroup][itemIndex]);
    resources[resourceGroup][itemIndex]['x'] = tempX;
    resources[resourceGroup][itemIndex]['y'] = tempY;
    resources['apple'][itemIndex]['status'] = 'full';
    console.log(resources[resourceGroup][itemIndex]);
    resourcesCtxt.drawImage(appleImg, tempX, tempY, 40, 40);
}