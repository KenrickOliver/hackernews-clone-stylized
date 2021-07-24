import RouterHandler from './router.js'


// START Code for sticky nav
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixedNav)

function fixedNav() {
    // console.log(window.scrollY, nav.offsetHeight)
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('nav-active')
    } else {
        nav.classList.remove('nav-active')
    }
}
// END Code for Sticky nav

class App {
    constructor() {
        new RouterHandler();
        console.log('app works!')  
      }  
    }
    
new App();