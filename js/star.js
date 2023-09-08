
const magic = document.querySelector(".magic-box");

let starTimeouts = [],
    starIntervals = [];

let starInterval = 1000, starIndex = 0.025;

const rand = (min, max) => 
    Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-20, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

magic.onmouseenter = () => {
  let index = 1;
  
  for(const star of document.getElementsByClassName("magic-star")) {
    starTimeouts.push(setTimeout(() => {  
      animate(star);
      
      starIntervals.push(setInterval(() => animate(star), 1000));
    }, index++ * 300));
  };
}

magic.onmouseleave = () => {
  for(const t of starTimeouts) clearTimeout(t);  
  for(const i of starIntervals) clearInterval(i);
  
  starTimeouts = [];
  starIntervals = [];
}

for(const span of document.querySelectorAll(".name_word")) {
    span.style.transitionDelay =`${starIndex}s`;
    
    starIndex += 0.025;
};
