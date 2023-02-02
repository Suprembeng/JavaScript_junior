one();

function one () {
    // alert ("Hello");
    // return 9;
    // return можно использовать как досрочное окончание функции
    // alert('Hello');
}

console.log( 5+one () );

function summa (a, b) {
    let c = 50; // локальная переменная, действует только внутри функции
    c = 50; // частично глобальная переменная.
    a = a || 50; // undefined or 50
    b = b || 55; 
    alert (a+b);
    return (a + b);


}

// console.log (summa (5));
 
document.getElementById('b1').onclick = function () {
    summa (12, 6);
}

let d = function () {
    alert ('work');
}
d ();