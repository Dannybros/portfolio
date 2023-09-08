const section = document.getElementById('project_section');

const toggleNav = () => {
    section.dataset.nav = section.dataset.nav === "true" ? "false" : "true";
    document.getElementById("projectToolTip").innerHTML="Close Project list";
}

function goToProject(path){
    window.location.href = path;
}

const slideBox = document.getElementById('proj-nav');
const tracker = document.getElementById('nav-links');

const handleSlideOnDown= e => tracker.dataset.mouseDownAt = e.clientX;

const handleSlideOnUp=(e)=>{
    tracker.dataset.mouseDownAt = "0";
    tracker.dataset.prevPercentage = tracker.dataset.percentage;
}

const handleSlideOnMove=(e)=>{
    if(tracker.dataset.mouseDownAt==="0") return;

    const mouseDelta = parseFloat(tracker.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;

    const percentage = mouseDelta / maxDelta * 100;
    let nextPercentage = parseFloat(tracker.dataset.prevPercentage) + percentage;
        //   nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    if (nextPercentage <=0) nextPercentage = 0; 
    else if (nextPercentage >=100) nextPercentage = 100;

    tracker.dataset.percentage = nextPercentage;
    tracker.animate({
        transform:`translateX(-${nextPercentage}%)`
    }, {duration:1200, fill:"forwards"})

    for(const image of tracker.querySelectorAll(".nav-link-image")){
        image.animate({
            objectPosition: `${nextPercentage}% center`
        }, {duration:1200, fill:"forwards"})
    }
}


slideBox.onmousedown = e =>handleSlideOnDown(e);
slideBox.ontouchstart = e => handleSlideOnDown(e.touches[0])

slideBox.onmouseup = e =>handleSlideOnUp(e)
slideBox.ontouchend = e => handleSlideOnUp(e.touches[0])

slideBox.onmousemove = e =>handleSlideOnMove(e)
slideBox.ontouchmove = e => handleSlideOnMove(e.touches[0])