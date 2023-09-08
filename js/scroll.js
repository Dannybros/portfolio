function scrollAnimationDirection(direction){
    
    let observer = new IntersectionObserver(entries=>{
        entries.forEach((entry) => {
            entry.target.classList.toggle(`swipe-${direction}-show`, entry.isIntersecting);
        });
    },{ rootMargin: "-50px" });
    
    const hiddenElements = document.querySelectorAll(`.swipe-${direction}-hidden`);
    hiddenElements.forEach((el)=>observer.observe(el));
}

scrollAnimationDirection("left");
scrollAnimationDirection("right");
scrollAnimationDirection("top");
scrollAnimationDirection("bottom");
scrollAnimationDirection("center");
scrollAnimationDirection("cartoon");
