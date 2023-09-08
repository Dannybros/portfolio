const drawFullCircle=(id, speed, color)=>{
    const paper = document.getElementById(id),
          pen = paper.getContext("2d");
    
    const settings = {
        startTime: new Date().getTime(),
    }

    const arcs=[{size:7}, {size:10}, {size:15}]
        
    const draw = () => { 
       
        paper.width = paper.clientWidth;
        paper.height = paper.clientHeight;
    
        const currentTime = new Date().getTime(),
            elapsedTime = (currentTime - settings.startTime) / 1000;
    
        const start = {
            x:paper.width * 0.1,
            y:paper.height * 0.9
        }
    
        const end = {
            x:paper.width * 0.9,
            y:paper.height * 0.9
        }
    
        const center = {
            x:paper.width * 0.5,
            y:paper.height * 0.5
        }
    
        const length = end.x - start.x,
              initalArcRadius = 150;
    
        pen.strokeStyle = color;
        pen.fillStyle = color;
        pen.lineWidth = 2;
    
        const spacing = (length - initalArcRadius) / 6;
    
        arcs.forEach((arc, index) => {
            const arcRadius = initalArcRadius + (index * spacing);
    
            // draw arc
            pen.beginPath();
            pen.arc(center.x, center.y, arcRadius, 0, 2 * Math.PI);
            pen.stroke();   
    
            // const arcRadius = length * 0.6;
            const velocity = speed[index];
            const maxAngle = 2 * Math.PI;
            const distance = Math.PI + (elapsedTime * velocity);
            const modDistance = distance % maxAngle;
        
            const x = center.x + arcRadius * Math.cos(modDistance),
                  y = center.y + arcRadius * Math.sin(modDistance);
        
            // draw circle
            pen.beginPath();
            pen.arc(x, y, arc.size, 0, 2 * Math.PI);
            pen.fill();
        });
        
        requestAnimationFrame(draw);
    }
    
    draw();
}

drawFullCircle('circle1', [1.5, 2, 0.5], 'white');
drawFullCircle('circle2', [0.5, 1.5, 2], 'white');
drawFullCircle('circle3', [1, 0.5, 2], 'rgb(163, 230, 53)');
drawFullCircle('circle4', [0.5, 2.5, 1], 'rgb(56, 189, 248)');