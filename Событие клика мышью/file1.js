let block = document.getElementById("one");
// клик мышью

// block.onclick = function () {
//     this.style.background = "green";
//     this.onclick = null;
// }

//двойной клик мышью

// block.ondblclick = function () {
//     this.style.background = 'yellow';
// }

//клик правой кнопкой мыши

// block.oncontextmenu = function () {
//     this.style.background = "red";
//     return false;
// }

// // блокировка вызова меню правой кнопкой мыши
// document.oncontextmenu = function () {
//     return false;
// }
// // мышь заходит на элемент

// block.onmouseenter = function () {
//     console.log ("IM HERE!!!!")
//     this.style.background = "silver";
// }

// //мышь уходит с элемента

// block.onmouseleave = function () {
//     this.style.background = "pink";
// }

//движение мышью внутри блока
// let a = 0;
// block.onmousemove = function () {
//     a++;
//     this.style.width = 100 + a+"px";
// }

// нажимаем и держим кнопку мыши любую
block.onmousedown = function (event) {
    this.style.background = "black";
    console.log("button:" +event.button);
    console.log("which:" +event.which);
}

block.onmouseup = function () {
    this.style.background = "yellow";
}