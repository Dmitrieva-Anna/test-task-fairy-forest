var btnMenu = document.querySelector(".header__burger");
var nav = document.querySelector('#nav');

btnMenu.addEventListener('click', function () {
    nav.classList.toggle('move');
});