function scrollAnimationDirection(direction){
    
    let observer = new IntersectionObserver(entries=>{
        entries.forEach((entry) => {
            // entry.target.classList.add(`swipe-${direction}-show`);
            entry.target.classList.toggle(`swipe-${direction}-show`, entry.isIntersecting);
        });
    },{ threshold: [0.25]});
    
    const hiddenElements = document.querySelectorAll(`.swipe-${direction}-hidden`);
    hiddenElements.forEach((el)=>observer.observe(el));
}

window.addEventListener("load", ()=>{
    scrollAnimationDirection("left");
    scrollAnimationDirection("right");
    scrollAnimationDirection("top");
    scrollAnimationDirection("bottom");
    scrollAnimationDirection("center");
    scrollAnimationDirection("cartoon");
})
