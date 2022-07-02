function MathRandomNum() {
    return Math.floor(Math.random() * 100)

}
let randomSentense = [
    'A man in Florida once threw a live alligator through a drive-thru window. A 24-year-old man named Joshua James was being handed his order',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni consectetur qui vel beatae velit, etnumquam commodi nobis? Placeat qui incidunt reprehenderit officiis ea odio inventore fuga, omnis laborum'
]
let text_rectangle = document.querySelector('.rectangle');
let magenta_rectangle = document.querySelector('.magenta');
let black_rectangle = document.querySelector('.black-rectangle')
// function hypotenuse(a,b){
//  let h=   Math.pow(a,2) + Math.pow(b,2)
//  return Math.pow(h,0.5)
// }
// let black_rectangle = document.querySelector('.black-rectangle')
function x(el) {
    let newPosX = 0,
        newPosY = 0,
        startPosX = 0,
        startPosY = 0;

    // when the user clicks down on the element
    el.addEventListener('mousedown', function (e) {
        e.preventDefault();

        // get the starting position of the cursor
        startPosX = e.clientX;
        startPosY = e.clientY;

        document.addEventListener('mousemove', mouseMove);

        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', mouseMove);
        });

    });
    el.addEventListener('touchstart', function (e) {
        e.preventDefault();
        console.log('in', e.touches[0].clientX);
        // get the starting position of the cursor
        startPosX = e.touches[0].clientX;
        startPosY = e.touches[0].clientY;

        document.addEventListener('touchmove', TouchMove);

        document.addEventListener('touchend', function () {
            document.removeEventListener('touchmove', TouchMove);
        });

    });
    console.log('moc')

    function mouseMove(e) {
        // calculate the new position
        newPosX = startPosX - e.clientX;
        console.log('mouse', e.clientX);
        newPosY = startPosY - e.clientY;

        // with each move we also want to update the start X and Y
        startPosX = e.clientX;
        startPosY = e.clientY;

        // set the element's new position:
        el.style.top = (el.offsetTop - newPosY) + "px";
        el.style.left = (el.offsetLeft - newPosX) + "px";
        text_rectangle.style.top = (el.offsetTop - newPosY) + -170 + "px";
        text_rectangle.style.left = (el.offsetLeft - newPosX) + "px";
    }

    function TouchMove(e) {
        // calculate the new position
        newPosX = startPosX - e.touches[0].clientX;
        newPosY = startPosY - e.touches[0].clientY;

        // with each move we also want to update the start X and Y
        startPosX = e.touches[0].clientX;
        startPosY = e.touches[0].clientY;

        // set the element's new position:
        el.style.top = (el.offsetTop - newPosY) + "px";
        el.style.left = (el.offsetLeft - newPosX) + "px";
        text_rectangle.style.top = (el.offsetTop - newPosY) + -170 + "px";
        text_rectangle.style.left = (el.offsetLeft - newPosX) + "px";
    }

}
// ey = document.querySelector('.box');
// ex = document.querySelector('.box2');
x(black_rectangle)

function rectangleMove() {

}
let clicked = 0;
text_rectangle.addEventListener('click', () => {
    console.log(`clicked`, clicked);
    if (clicked < randomSentense.length) {
        document.querySelector('.rectangle p').innerHTML = randomSentense[clicked]
    } else {
        clicked = 0;
        document.querySelector('.rectangle p').innerHTML = randomSentense[clicked]
    }
    clicked++;
})