import RouterHandler from "./router.js";

// START Code for sticky nav
const nav = document.querySelector(".navbar");
const logo = document.querySelector(".logo");
window.addEventListener("scroll", fixedNav);

function fixedNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("nav-active");
    logo.classList.add("logo-active");
  } else {
    nav.classList.remove("nav-active");
    logo.classList.remove("logo-active");
  }
}
//responsive nav
const toggle = document.querySelector(".toggle__button");
const navLinks = document.querySelector(".navbar__links");
const toggleIcon = document.querySelector(".toggle__icon");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  toggleIcon.classList.toggle("bx-menu");
  toggleIcon.classList.toggle("bx-x");
});

// Code to check WHICH link is active based on Hash(#) to assign .active class to it
window.onhashchange = () => {
  setActiveLink();
};

function setActiveLink() {
  const links = document.querySelectorAll(".header-link");
  links.forEach((link) => {
    const linkPath = link.getAttribute("href");
    const currentPath = window.location.hash;
    if (currentPath === linkPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
class App {
  constructor() {
    new RouterHandler();
  }
}

new App();
