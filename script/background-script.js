let bgContext = document.getElementById('background').getContext('2d');
let bgCanvas = document.getElementById('background');
// bgCanvas.width = window.innerWidth;
// bgCanvas.height = window.innerHeight;
// bgCanvas.setAttribute('style', 'top:0px; left: 0px;')
let bgImage = new Image();


function renderBackground(){
    let pattern = bgContext.createPattern(bgImage, 'repeat');
    bgContext.fillStyle = 'rgb(150, 194, 153)';
    bgContext.fillRect(0, 0, 500, 500);
    bgContext.fillStyle = pattern;
    bgContext.fillRect(0, 0, 500, 500);
}



bgImage.src = './media/leaf3.png';
bgImage.addEventListener('load', renderBackground);

