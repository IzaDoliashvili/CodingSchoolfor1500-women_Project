"use strict";

document.addEventListener('DOMContentLoaded', function() {
const header = document.querySelector("header");
const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');
const menuIcon = document.getElementById('menu-icon');

menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('clicked');
});

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 80);
});

menu.addEventListener('click', function () {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
});

document.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !navlist.contains(event.target)) {
        menu.classList.remove('bx-x');
        navlist.classList.remove('open');
    }
    if (menu.contains(event.target)) {
        return;
    }
    if (navlist.contains(event.target)) {
        return;
    }
    navlist.classList.remove('open');
});
});