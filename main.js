function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const updateNavbarBackground = debounce(() => {
  const upperBound = 64;
  const scrollValue = document.querySelector("html").scrollTop;
  const navbar = document.querySelector(".navbar");
  navbar.style = `background: rgba(0,0,0,${scrollValue < upperBound ? scrollValue / upperBound : 1});`
}, 5);

const sections = document.querySelectorAll("section");
const html = document.querySelector("html");
const root = document.querySelector("#root");
const updateNavbarItems = debounce(() => {
   
}, 5);

let isMenuActive = false;
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector("#hamburger");
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

//window.addEventListener('scroll', updateNavbarBackground);
//window.addEventListener('scroll', updateNavbarItems);
hamburger.addEventListener('click', toggleMenu);
document.querySelectorAll(".menu-item").forEach((menuItem) => {menuItem.addEventListener("click", toggleMenu)});
