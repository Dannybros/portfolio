const platform = document.querySelector(".bounce_platform");
const block = document.querySelector(".block_box");
const FPS = 60;

// Logo moving velocity Variables
let xPosition = 10;
let yPosition = 10;
let xSpeed = 4;
let ySpeed = 4;

function update() {
  block.style.left = xPosition + "px";
  block.style.top = yPosition + "px";
}

function moveBlock(){
    if (xPosition + block.clientWidth >= platform.clientWidth || xPosition <= 0){
        xSpeed = -xSpeed;
    }

    if (yPosition + block.clientHeight >= platform.clientHeight || yPosition <= 0){
        ySpeed = -ySpeed;
    }

    // if (xPosition + block.clientWidth >= platform.clientWidth){
    //     xSpeed = -xSpeed;
    //     xPosition = platform.clientWidth - block.clientWidth;
    //     // block.style.background = randomColor();
    // }else if (xPosition <= 0){
    //     xSpeed = -xSpeed;
    //     xPosition = 0;
    //     // block.style.background = randomColor();
    // }

    // if (yPosition + block.clientHeight >= platform.clientHeight){
    //     ySpeed = -ySpeed;
    //     yPosition = platform.clientHeight - block.clientHeight;
    //     // block.style.background = randomColor();
    // }else if (yPosition <= 0){
    //     ySpeed = -ySpeed;
    //     yPosition = 0;
    //     // block.style.background = randomColor();
    // }
    
    xPosition += xSpeed;
    yPosition += ySpeed;

    update();
}

var timer = setInterval(() => {

    moveBlock();
    
}, 1000 / FPS);


function randomColor() {
  let color = "#";
  color += Math.random().toString(16).slice(2, 8).toUpperCase();

  return color;
}

block.onmouseover = e => clearInterval(timer);
block.onmouseout = e => timer = setInterval(()=>{ moveBlock()}, 1000 / FPS);

window.addEventListener("resize", () => {
    xPosition = (platform.clientWidth - block.clientWidth) / 2;
    yPosition = (platform.clientHeight - block.clientHeight) / 2;;

    if(window.innerWidth <= 500){
        block.style.left = xPosition + "px";
        block.style.top = yPosition + "px";
        clearInterval(timer);
    }
});

