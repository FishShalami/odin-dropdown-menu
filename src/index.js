import "./global.css";
import addMenuDropdown from "./menu";
import "./carouselStyle.css";
import carouselArrows from "./carouselDOM";

const menuSelectorHead = document.querySelector("header p"); //adjust selector for name of menu element/header
const menuItemsHead = document.querySelector("header .menu");
// const menuSelectorFoot = document.querySelector("footer p"); //adjust selector for name of menu element/header
// const menuItemsFoot = document.querySelector("footer .menu");

addMenuDropdown(menuSelectorHead, menuItemsHead);
// addMenuDropdown(menuSelectorFoot, menuItemsFoot);

carouselArrows();
