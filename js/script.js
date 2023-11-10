// New class key
let newClass = "active";

// for loader
setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
}, 3000);

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

// for note page
const removeNote = document.querySelector("#remove-note"),
    notePad = document.querySelector(".notepad"),
    clickNotepad = document.querySelector(".click-note");

    
clickNotepad.addEventListener("click", () => {
    notePad.classList.toggle(newClass);
});

removeNote.addEventListener("click", () => {
    notePad.classList.toggle(newClass);
});