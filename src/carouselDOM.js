import { plusSlides } from "./carousel.js";

function carouselArrows() {
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
}

export default carouselArrows;
