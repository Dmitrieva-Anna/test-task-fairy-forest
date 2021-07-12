var btnMenu = document.querySelector(".header__burger");
var nav = document.querySelector('#nav');
var tur = document.querySelector(".header__view");
var lock = document.querySelector('#lock');
var metroAddress = document.querySelector('.location__metro-address');

btnMenu.addEventListener('click', function () {
    nav.classList.toggle('move');
    tur.classList.toggle('move');
    btnMenu.classList.toggle('change');
    lock.classList.toggle('lock');
});