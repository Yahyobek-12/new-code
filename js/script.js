// New class key
let newClass = "active";

// for menu and nav
const nav = document.querySelector("header"),
    menuNav = document.querySelector("#menu"),
    removeMenu = document.querySelector("#remove-menu"),
    navLinks = document.querySelectorAll(".nav-link");

menuNav.addEventListener("click", () => {
    nav.classList.toggle(newClass);
    menuNav.classList.toggle(newClass);
    removeMenu.classList.toggle(newClass);
});

removeMenu.addEventListener("click", () => {
    nav.classList.toggle(newClass);
    menuNav.classList.toggle(newClass);
    removeMenu.classList.toggle(newClass);
});

navLinks.forEach(item => {
    item.addEventListener("click", () => {
        nav.classList.toggle(newClass);
        menuNav.classList.toggle(newClass);
        removeMenu.classList.toggle(newClass);
    })
})
// For videos 
const videoClick = document.querySelector(".videos"),
    endPage = document.querySelector(".end"),
    removeEnd = document.querySelectorAll(".remove-end");

videoClick.addEventListener("click", () => {
    endPage.classList.toggle(newClass);
});

removeEnd.forEach(item => {
    item.addEventListener("click", () => {
        endPage.classList.toggle(newClass);
    });
});