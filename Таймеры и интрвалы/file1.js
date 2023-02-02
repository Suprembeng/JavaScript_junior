let sdvig = 0;
let test = document.getElementById('test');

//setInterval(function_name, time)
// move();
function move() {
    test.style.marginLeft = sdvig + 'px';
    sdvig = sdvig + 10;
    timer = setTimeout(move, 50);
}

// let timer = setInterval (move, 40); //1sec = 1000ms
document.getElementById('stop').onclick = function () {
    clearInterval(timer);
}

// setTimeout (move, 5000); 

let a = 10;
obr();
function obr() {
    document.getElementById('out').innerHTML = a;
    a--;
    if (a<0) {
        clearTimeout(timer);
        alert('Timer is off');
    }
    else {
        timer = setTimeout(obr, 1000);
    }
}