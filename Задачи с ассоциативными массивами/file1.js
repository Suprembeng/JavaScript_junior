let man = {
    "name" : 'Alex',
    "age" : '67',
    "id" : "id1516516",
    "sex" : "male"
};

let man2 = {
    "name" : 'Alex',
    "age" : 55,
    "id" : "id1516516",
    "sex" : "male",
    "year" : function () {
        return 2020- this.age;
    }
};

console.log(man2.year ());

// console.log(man);
// console.log(man.name);
// console.log(man['name']);
// let a = "name";
// console.log(man[a]);

let m = {
    "mas" : [5, 15, 25, 50],
    "sum" : function () {
        let sum = 0;
        for (let i=0; i<this.mas.length; i++) {
            sum = sum + this.mas[i];
        }
        return sum;
    }
}

console.log(m.sum ());