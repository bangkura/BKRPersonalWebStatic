window.onload = function () {
    initial();
    console.log(document.documentElement.clientHeight);
    console.log(document.documentElement.scrollHeight);
}

function initial() {
    document.getElementById('card-1').style.height = (document.documentElement.scrollHeight - document.getElementById('nav-bar').clientHeight) + 'px';
}