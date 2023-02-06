function fontfamily() {
    let element = document.getElementById("block1");
    element.style.fontFamily = "serif";
}
function colorText() {
    let elem = document.getElementById("block2");
    elem.style.color = `rgb(${rndBg()}, ${rndBg()}, ${rndBg()})`;
}
function borderColor() {
    document.getElementById("block3").style.borderColor = `rgb(${rndBg()}, ${rndBg()}, ${rndBg()})`;
}

function borderRadius() {
    let border = document.getElementById("block5");
    border.style.borderRadius = '5px';
}

let random = document.querySelector(".random");
function rndBg(){
    return Math.floor(Math.random() * 255);    
}