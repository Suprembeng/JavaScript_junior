//let a = 5;
//let b = 5;

//if (a > b) {
//   alert("Первое число больше");
//}

//else if (a == b) {
//  alert("Числа равны");
//}

//else {
//  alert("Второе число больше");
//}

function f1() {
    var n, p;
    n = document.getElementById("num1").value;
    p = document.getElementById("out");
    n = parseInt(n);
    if (n == 100) {
        p.innerHTML = "Число равно 100";
    }

    else if (n < 100) {
        p.innerHTML = "Число меньше 100";
    }
    else {
        p.innerHTML = "Число больше 100";
    }
}