import "./global.css";
import addMenuDropdown from "./menu";
import "./carouselStyle.css";
import { carouselArrows, carouselDots } from "./carouselDOM";
import { showSlides, autoSlide } from "./carousel";
import { forEach } from "lodash";

const menuSelectorHead = document.querySelector("header p"); //adjust selector for name of menu element/header
const menuItemsHead = document.querySelector("header .menu");
// const menuSelectorFoot = document.querySelector("footer p"); //adjust selector for name of menu element/header
// const menuItemsFoot = document.querySelector("footer .menu");

addMenuDropdown(menuSelectorHead, menuItemsHead);
// addMenuDropdown(menuSelectorFoot, menuItemsFoot);

let slideIndex = 1;
carouselArrows();
carouselDots();
showSlides(slideIndex);
autoSlide();
