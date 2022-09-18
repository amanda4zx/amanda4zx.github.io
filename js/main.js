const menuBtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('nav');
const menuNav = document.querySelector('menu-nav');
// const navItems = document.querySelectorAll('.menu-nav__item');

let menuShown = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!menuShown) {
        burger.classList.add('open');
        nav.classList.add('open');
        // menuNav.classList.add('open');
        menuShown = true;
    } else {
        burger.classList.remove('open');
        nav.classList.remove('open');
        // menuNav.classList.remove('open');
        menuShown = false;
    }
}

