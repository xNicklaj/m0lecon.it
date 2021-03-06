const html = document.querySelector("html");
const root = document.querySelector("#root");
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector("#hamburger");
let isMenuActive = false;
let scroll = new SmoothScroll('a[data-scroll]', {speed: 600, speedAsDuration: true});

const toggleMenu = () => {
  if(window.matchMedia("(max-width: 950px)").matches == false) return;
  if(!isMenuActive){
    navbar.className += " visible";
    hamburger.className += " fa-times";
    root.className += " noscroll";
    html.className += " noscroll";
  }
  else{
    navbar.className = navbar.className.replace("visible", "");
    hamburger.className = hamburger.className.replace("fa-times", '');
    root.className = html.className.replace("noscroll", "");
    html.className = html.className.replace("noscroll", "");
  }
  isMenuActive = !isMenuActive;
};

hamburger.addEventListener('click', toggleMenu);
document.querySelectorAll(".menu-item").forEach((menuItem) => {menuItem.addEventListener("click", toggleMenu)});
