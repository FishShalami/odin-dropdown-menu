import "./global.css";
import addMenuDropdown from "./menu";
import "./carouselStyle.css";
import carouselArrows from "./carouselDOM";
import { forEach } from "lodash";
import { currentSlide } from "./carousel";

const menuSelectorHead = document.querySelector("header p"); //adjust selector for name of menu element/header
const menuItemsHead = document.querySelector("header .menu");
// const menuSelectorFoot = document.querySelector("footer p"); //adjust selector for name of menu element/header
// const menuItemsFoot = document.querySelector("footer .menu");

addMenuDropdown(menuSelectorHead, menuItemsHead);
// addMenuDropdown(menuSelectorFoot, menuItemsFoot);

carouselArrows();

const dotSelector = document.querySelectorAll(".dot");

dotSelector.forEach((dot) => {
  dot.addEventListener("click", (event) => {
    const dotIndex = dot.getAttribute("data-index");
    console.log(`Dot ${dotIndex} was clicked`);
    currentSlide(dotIndex);
  });
});
