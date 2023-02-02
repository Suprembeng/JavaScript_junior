let str = '';
document.getElementById("test").onkeypress = function (event) {
   // console.log(event);
    str = str + event.key;
    console.log(str);
   // console.log(String.fromCharCode(122));
   this.value += String.fromCharCode(getRandomInt (65, 122));
    return false;
    // 97 - 122
    // 65 - 90
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max-min)) +min;
}