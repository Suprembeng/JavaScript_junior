document.onwheel = function (event) {
    console.log(event);

    if (event.deltaY > 0) {
        document.getElementById('line').innerHTML = 'вниз';
    }
    else {
        document.getElementById('line').innerHTML = 'вверх';
    }

    var speed = event.deltaY;
    speed = Math.abs(speed);
    
    if (speed < 100) {
        document.getElementById('speed').innerHTML = 'низкая скорость';
    }
    
    else if (speed < 150) {
        document.getElementById('speed').innerHTML = 'скорость средняя';
    }

    else if (speed < 250) {
        document.getElementById('speed').innerHTML = 'очень высокая';
    }
}
