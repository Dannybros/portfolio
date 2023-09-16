const left = document.getElementById("left-side");
const right = document.getElementById("right-side");
const hero = document.querySelector('.skill_section');
const slider = document.getElementById('slider');
const slider_icon = document.querySelector('.slider_icon');

const handleOnDown = e => {
    slider.dataset.mouseDownAt = e.clientX;
}

const handleOnUp = () => {
    slider.dataset.mouseDownAt = "0";  
    slider.dataset.prevPercentage = slider.dataset.percentage;
}

const handleOnMove = e =>{

    if(slider.dataset.mouseDownAt === "0") return;

    const mouseDelta =  parseFloat(slider.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth;

    const percentage = (mouseDelta / maxDelta) * 100,
    nextPercentage = parseFloat(slider.dataset.prevPercentage) - percentage;
    
    slider.dataset.percentage = nextPercentage;

    slider.animate({
    left: `${e.clientX / window.innerWidth * 100}%`
    }, {fill: "forwards" }); 
    
    left.style.width= `${e.clientX / window.innerWidth * 100}%`;
}


slider.onmousedown = e => handleOnDown(e);
slider.onmouseup = e => handleOnUp(e);
slider.onmousemove = e => handleOnMove(e);

slider.ontouchstart = e => handleOnDown(e.touches[0]);
slider.ontouchend = e => handleOnUp(e.touches[0]);
slider.ontouchmove = e => handleOnMove(e.touches[0]);

