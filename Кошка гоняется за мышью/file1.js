document.onmousemove = function () {
    document.getElementsByTagName('body') [0].insertAdjacentHTML('beforeEnd', '<img src="https://cdn4.iconfinder.com/data/icons/vectortown-endangered-species/32/Panther_Leopard-128.png" id="cat">');
    var cat = document.getElementById('cat');
    cat.style.position = 'fixed';


document.onmousemove = function (event) {
cat.style.left = event.clientX +5+'px';
cat.style.top = event.clientY +5+'px';
}
}