window.onload = () => {
    activateMove(black_rectangle)
}

function MathRandomNum() {
    return Math.floor(100 * Math.random())
}
let randomSentense = ["A man in Florida once threw a live alligator through a drive-thru window. A 24-year-old man named Joshua James was being handed his order", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni consectetur qui vel beatae velit, etnumquam commodi nobis? Placeat qui incidunt reprehenderit officiis ea odio inventore fuga, omnis laborum"],
    text_rectangle = document.querySelector(".rectangle"),
    magenta_rectangle = document.querySelector(".magenta"),
    black_rectangle = document.querySelector(".black-rectangle"),
    clicked = 0;


function desktop(el) {
    let newPosX = 0,
        newPosY = 0,
        startPosX = 0,
        startPosY = 0;
    el.addEventListener("mousedown", (function (e) {

        function mouseMove(e) {
            newPosX = startPosX - e.clientX
            newPosY = startPosY - e.clientY
            startPosX = e.clientX
            startPosY = e.clientY
            el.style.top = el.offsetTop - newPosY + "px"
            el.style.left = el.offsetLeft - newPosX + "px"

            // text_rectangle.style.top = el.offsetTop - newPosY + "px"
            // text_rectangle.style.left = el.offsetLeft - newPosX + "px"
        }
        e.preventDefault()
        startPosX = e.clientX
        startPosY = e.clientY
        document.addEventListener("mousemove", mouseMove)
        document.addEventListener("mouseup", (function () {
            document.removeEventListener("mousemove", mouseMove)
        }))
    }))
}

function mobile(el) {
    let newPosX = 0,
        newPosY = 0,
        startPosX = 0,
        startPosY = 0;

    function TouchMove(e) {
        newPosX = startPosX - e.touches[0].clientX
        newPosY = startPosY - e.touches[0].clientY
        startPosX = e.touches[0].clientX
        startPosY = e.touches[0].clientY

        el.style.top = el.offsetTop - newPosY + "px"
        el.style.left = el.offsetLeft - newPosX + "px"

        // text_rectangle.style.top = el.offsetTop - newPosY + "px"
        // text_rectangle.style.left = el.offsetLeft - newPosX + "px"
    }

    el.addEventListener("touchstart", (function (e) {
        e.preventDefault(), console.log("in", e.touches[0].clientX), startPosX = e.touches[0].clientX, startPosY = e.touches[0].clientY, document.addEventListener("touchmove", TouchMove), document.addEventListener("touchend", (function () {
            document.removeEventListener("touchmove", TouchMove)
        }))
    }))
}

function activateMove(arg) {
    mobile(arg), desktop(arg)
}


text_rectangle.addEventListener("click", () => {

    clicked < randomSentense.length ? document.querySelector(".rectangle p").innerHTML = randomSentense[clicked] : (clicked = 0, document.querySelector(".rectangle p").innerHTML = randomSentense[clicked]), clicked++
});