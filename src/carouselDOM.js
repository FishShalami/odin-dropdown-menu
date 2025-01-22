import { plusSlides, currentSlide } from "./carousel.js";

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

function carouselDots() {
  const dotSelector = document.querySelectorAll(".dot");

  dotSelector.forEach((dot) => {
    dot.addEventListener("click", (event) => {
      const dotIndex = dot.getAttribute("data-index");
      console.log(`Dot ${dotIndex} was clicked`);
      currentSlide(dotIndex);
    });
  });
}

export { carouselArrows, carouselDots };
