document.addEventListener("DOMContentLoaded", () => {
  const open = document.querySelector(".open-nav");
  const close = document.querySelector(".close-nav");

  open.addEventListener("click", () => {
    document.querySelector(".sidebar-menu").style.width = "200px";
    document.querySelector(".close-nav").style.display = "block";
    document.querySelector(".open-nav").style.display = "none";
  });
  close.addEventListener("click", () => {
    document.querySelector(".sidebar-menu").style.width = "0px";
    document.querySelector(".close-nav").style.display = "none";
    document.querySelector(".open-nav").style.display = "block";
  });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

// animation

const cards = gsap.utils.toArray(".stories");

cards.forEach((card) => {
  const anim = gsap.fromTo(
    card,
    {
      autoAlpha: 0,
      // y: -50,
      x: -100,
      // rotate: 10,
    },
    {
      duration: 0.6,
      autoAlpha: 1,
      // y: 0,
      x: 0,
      // rotate: 0,
    }
  );
  ScrollTrigger.create({
    trigger: card,
    animation: anim,
  });
});

const containers = gsap.utils.toArray(".storiesOfGotham");

containers.forEach((container) => {
  const anim = gsap.fromTo(
    container,
    {
      autoAlpha: 0,
      // y: -50,
      x: -100,
      // rotate: 10,
    },
    {
      duration: 0.6,
      autoAlpha: 1,
      // y: 0,
      x: 0,
      // rotate: 0,
    }
  );
  ScrollTrigger.create({
    trigger: container,
    animation: anim,
  });
});

// quick links
