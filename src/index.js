import "./global.css";
import addMenuDropdown from "./menu";
import "./carouselStyle.css";
import { plusSlides, currentSlide, showSlides } from "./carousel.js";

const menuSelectorHead = document.querySelector("header p"); //adjust selector for name of menu element/header
const menuItemsHead = document.querySelector("header .menu");
// const menuSelectorFoot = document.querySelector("footer p"); //adjust selector for name of menu element/header
// const menuItemsFoot = document.querySelector("footer .menu");

addMenuDropdown(menuSelectorHead, menuItemsHead);
// addMenuDropdown(menuSelectorFoot, menuItemsFoot);

const prevArrow = document.querySelector(".prev");
prevArrow.addEventListener("click", () => {
  console.log("previous arrow clicked");
  plusSlides(-1);
});

const nextArrow = document.querySelector(".next");
nextArrow.addEventListener("click", () => {
  console.log("next arrow clicked");
  plusSlides(1);
});
