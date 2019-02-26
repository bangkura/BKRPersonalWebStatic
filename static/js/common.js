window.onload = function () {
    initial();
}

function initial() {
    document.getElementById('card-1').style.height = (document.documentElement.clientHeight - document.getElementById('nav-bar').clientHeight) + 'px';
}