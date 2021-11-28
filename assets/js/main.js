const menuBtn = document.getElementById('menu-btn');
const logo = document.querySelector('.logo');
const menuIcon = document.querySelector('.hamburger-icon');
// const nav = document.getElementById('nav');
const nav = document.getElementsByTagName('nav')[0];
const headerMenu = document.querySelector('.header-menu')

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.setAttribute('src', 'assets/img/icon-close.svg');

        menuIcon.classList.add('js-fixed-menu');
        headerMenu.classList.add('js-move-right');
        nav.classList.add('js-navbar__nav');
        menuOpen = true;
    } else {
        menuBtn.setAttribute('src', 'assets/img/icon-hamburger.svg');
        menuIcon.classList.remove('js-fixed-menu');
        nav.classList.remove('js-navbar__nav');
        menuOpen = false;
    }
});