window.onload = function () {
    //window.scrollTo (x, y)
    let scrolled;
    let timer;

    document.getElementById('top').onclick = function () {
        scrolled = window.pageYOffset;
        //window.scrollTo(0, 0);
        scrollToTop();
    }
    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 50; //100 - скорость прокрутки
            timer = setTimeout(scrollToTop, 150);
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    }
}