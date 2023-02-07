const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toogle("active");
    navMenu.classList.toogle("active");
})

document.querySelectorAll(".nav__link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))