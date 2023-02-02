let goods = {
    "5151" : {
        "name" : "Апельсин",
        "cost" : 30,
        "img" : "https://cdn1.iconfinder.com/data/icons/food-volume-ii/64/orange-128.png",
        "sklad" : "net",


    },
    "74191" : {
        "name" : "Вишня",
        "cost" : 80,
        "img" : "https://cdn4.iconfinder.com/data/icons/casino-games/512/cherry-128.png",
        "sklad" : "da",
    },
    "74123931" : {
        "name" : "Арбуз",
        "cost" : 120,
        "img" : "https://cdn1.iconfinder.com/data/icons/unigrid-bluetone-fruits-vegetables/60/010_017_watermelon_fruit_berry_food_slice-128.png",
        "sklad" : "da",
    }

};

console.log(goods);
let out = "";
for (let key in goods) {
    out+="Название: "+goods[key].name + '<br>';
    out+="Цена: "+goods[key].cost + '<br>';
    out+="Наличие: "+goods[key].sklad + '<br>';
    // <img src="">
    out+='<img src="'+goods[key].img+'">';
    out+="<hr>";
}

document.getElementById('out').innerHTML = out;