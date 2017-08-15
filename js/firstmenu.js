let openButton = document.querySelector('.header-hamburger');
let hidden = document.querySelector('.hidden__menu');
let close = document.querySelector('.close__icon')
let body = document.querySelector('body');

// openButton.onclick = function () {
//     console.log("burger icon pressed");
//     hidden.style.display = "block";
//     body.style.overflow = "hidden";
// }

// close.onclick = function (e) {
//     console.log("cross icon pressed");
//     hidden.style.display = "none";
//     body.style.overflow = "inherit";
//     e.stopPropagation();
// }

openButton.addEventListener('click', function() {
    console.log("burger icon pressed");
    openButton.classList.add('disappear');
    hidden.classList.add('appear');
    body.style.overflow = "hidden";
})
close.addEventListener('click', function(e) {
    console.log("close icon pressed");
    hidden.classList.remove('appear');
    openButton.classList.remove('disappear');
    body.style.overflow = "inherit";
    // e.stopPropagation();
})