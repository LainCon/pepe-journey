let hudCanvas = document.getElementById('hud-layer');
let hudContext = hudCanvas.getContext('2d');
let health = 30;
let hydration = 60;
let stomach = 100;
let woodImg = new Image();
woodImg.src = './media/wood.png';
let hudX = 0;
let hudY = 0;


function generateHudBg(){
    hudContext.clearRect(0, 0, 500, 100);
    let pattern = hudContext.createPattern(woodImg, 'repeat');
    hudContext.fillStyle = pattern;
    hudContext.fillRect(0, 0, 500, 100);
    generateHud();
}

function generateHud() {
    // hudContext.lineWidth = 3;
    // hudContext.strokeStyle = '#4d6a6d';
    // hudContext.fillStyle='rgba(255, 150, 255, 0.5)'
    // hudContext.fillRect(0, 0, 130, 80);
    hudContext.shadowBlur = 15;
    hudContext.shadowColor = 'rgba(255,150,255,1)';
    hudContext.fillStyle='#4d6a6d';
    hudContext.font = 'bold 20px monospace';
    hudContext.fillText(`💖`, hudX+10, hudY+20);
    hudContext.fillText(`💧`, hudX+110, hudY + 20);
    hudContext.fillText(`🍉`, hudX+220, hudY + 20);
    updateFillStyle(health);
    health = (health > 100) ? 100 : health;
    health = (health < 0) ? 10 : health;
    hudContext.fillRect( hudX+40, hudY + 10, health / 2, 6);
    updateFillStyle(hydration);
    hydration = (hydration > 100) ? 100 : hydration;
    hydration = (hydration< 0) ? 10 : hydration;
    hudContext.fillRect(hudX + 140, hudY+10, hydration / 2, 6);
    stomach = (stomach > 100) ? 100 : stomach;
    stomach = (stomach < 0) ? 10 : health;
    updateFillStyle(stomach);
    hudContext.fillRect(hudX+250, hudY+10, stomach / 2, 6);
}

function updateFillStyle(val) {
    if (val > 60) {
        hudContext.fillStyle = '#4dda6d';
    }
    else if (val <= 60 && val > 30) {
        hudContext.fillStyle = '#FFBB00';
    }
    else if (val <= 30) {
        hudContext.fillStyle = '#ff0000';
    }
}


woodImg.addEventListener('load', generateHudBg);