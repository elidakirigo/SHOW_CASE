function x(el){
let newPosX = 0, newPosY = 0, startPosX = 0, startPosY = 0;

// when the user clicks down on the element
el.addEventListener('mousedown', function(e){
    e.preventDefault();
    
    // get the starting position of the cursor
    startPosX = e.clientX;
    startPosY = e.clientY;
    
    document.addEventListener('mousemove', mouseMove);
    
    document.addEventListener('mouseup', function(){
        document.removeEventListener('mousemove', mouseMove);
    });
    
});

console.log('moc')
function mouseMove(e) {
    // calculate the new position
    newPosX = startPosX - e.clientX;
    newPosY = startPosY - e.clientY;

    // with each move we also want to update the start X and Y
    startPosX = e.clientX;
    startPosY = e.clientY;

    // set the element's new position:
    el.style.top = (el.offsetTop - newPosY) + "px";
    el.style.left = (el.offsetLeft - newPosX) + "px";
}

}
ey = document.querySelector('.box');
ex = document.querySelector('.box2');
x(ey)
x(ex)