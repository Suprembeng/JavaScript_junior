function out() {
    var p;
    p = document.getElementById("out");
  p.insertAdjacentHTML('afterEnd', '');
  p.outerHTML = "<strong>Hi</strong>";
    }