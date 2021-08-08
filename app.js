import RouterHandler from './router.js'


// START Code for sticky nav
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixedNav)

function fixedNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('nav-active')
    } else {
        nav.classList.remove('nav-active')
    }
}
// END Code for Sticky nav

// Code to check WHICH link is active based on Hash(#) to assign .active class to it
window.onhashchange = () => {
    setActiveLink();
  }
  
  function setActiveLink() {
     const links = document.querySelectorAll('.header-link');
     links.forEach(link => {
        const linkPath = link.getAttribute('href');
        const currentPath = window.location.hash;
        if (currentPath === linkPath) {
          link.classList.add('active');  
        } else {
          link.classList.remove('active');         
        }
     });
  }
class App {
    constructor() {
        new RouterHandler(); 
      }  
    }
    
new App();