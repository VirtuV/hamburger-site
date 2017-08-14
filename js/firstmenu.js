let openButton = document.querySelector('.header-hamburger');
let hidden = document.querySelector('.hidden__menu');
let close = document.querySelector('.close__icon')
let body = document.querySelector('body');

openButton.onclick = function () {
    console.log("burger icon pressed");
    hidden.style.display = "block";
    body.style.overflow = "hidden";
}

close.onclick = function (e) {
    console.log("cross icon pressed");
    hidden.style.display = "none";
    body.style.overflow = "inherit";
    e.stopPropagation();
}


