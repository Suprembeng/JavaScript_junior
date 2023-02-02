let number = Math.floor(10 * Math.random()) + 1; //случайное число от 1 до 10
console.log(number);
var count = 3;
document.getElementById('check').onclick = function () {
    if (count > 0) {
        let usernum = document.getElementById('mynum').value;
        usernum = parseInt(usernum);
        let out = document.getElementById('out');

        if (usernum == number) {
            out.innerHTML = 'Ура вы угадали!';
        }

        else if (usernum > number) {
            out.innerHTML = 'Перелет';
        }
        else if (usernum < number) {
            out.InnerHTML = 'Недолет';
        }
        let count;
        count = count - 1;
        document.getElementById('count').innerHTML = 'Осталось попыток  '+count;
    }
    else {
        alert('Попытки закончены, вы проиграли!');
        location.reload();
    }
} 