const navBtn = document.querySelector(".nav__btn-img");
const navBtnX = document.querySelector(".nav__btn-img--x");
const navMenu = document.querySelector(".nav__menu");
const shadow = document.querySelector(".shadow");

const handleMenu = () => {
	navBtn.classList.toggle("display-disable");
	navBtnX.classList.toggle("display-active");
	shadow.classList.toggle("opacity");
	navMenu.classList.toggle("menu-active");
	document.body.classList.toggle("overflow-hidden");
};
