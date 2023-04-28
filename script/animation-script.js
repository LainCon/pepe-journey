let animationCanvas = document.getElementById('animation-layer');
let animationContext = animationCanvas.getContext('2d');
let appleEatSprite = new Image();
appleEatSprite.src = './media/apple-sprite.png';

let animateX, animateY;
let appleSx = 20, appleSy = 0;
function animateAppleEat(x, y){
    animateX = x;
    animateY = y;
    setTimeout(appleEatAnimation, 0);
    setTimeout(appleEatAnimation, 100);
    setTimeout(appleEatAnimation, 200);
    setTimeout(appleEatAnimation, 300);
    appleSx= 20;

}

function appleEatAnimation(){
    animationContext.clearRect(0, 0, 500,500);
    animationContext.drawImage(appleEatSprite, appleSx, appleSy, 20, 20, animateX, animateY, 40, 40);
    if (appleSx >= 80) {
        appleSx = 0;
    }
    appleSx += 20;
}


//below function is aimed to be used at later cases when the clear function to canvas
//...is more specific instead of clearning entire rectangle.
function clearGarbage(){
    animationContext.clearRect(animateX, animateY, 40, 40);
}