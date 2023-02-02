function f1() {
    let p, p1;
    p = document.getElementById("out");
    p1 = document.getElementById("out1");

    let i = 0;
    while (i < 50) {
        p.innerHTML += i + " ";
        //i=i+1;
        i++;

    }

let j=100;
do {
    p.innerHTML+=j+" ";
    j--;
}
while (j>0);
}