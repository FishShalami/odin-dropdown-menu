let slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

//Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideimage");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    //go back to start
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length; //go to last slide
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; //hide all slides
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block"; //display active slide
  dots[slideIndex - 1].className += " active";
}

function autoSlide() {
  slideIndex++;
  showSlides(slideIndex);
  setTimeout(autoSlide, 2000);
}

export { plusSlides, currentSlide, showSlides, autoSlide };
