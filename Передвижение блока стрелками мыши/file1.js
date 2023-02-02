let block = document.getElementById("test");
let left = 0;
let top1 = 0;

document.onkeydown = function (event) {
    console.log(event);
    if (event.key == "ArrowRight") {
        block.style.left = left + 'px';
        left++;
    }

    if (event.key == "ArrowDown") {
        block.style.top = top1 + 'px';
        top1++;
    }
    
    document.onkeyup = function (event) {
        console.log("клавиша не нажата");
    }
}