var menu = document.getElementById('menu');
var home = document.getElementById('menu-home');

menu.addEventListener('click', function () {
    home.classList.toggle('on')
    menu.classList.toggle('on')
})