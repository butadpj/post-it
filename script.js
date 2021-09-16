let typewrite = document.querySelector(".typewrite");
let wrap = document.querySelector(".type-mark");
let text = typewrite.dataset.word;
let typeSpeed = 100;
let i = 0;

const typeWriterEffect = () => {
  while (i < text.length) {
    typewrite.firstElementChild.innerHTML += text[i];
    setTimeout(typeWriterEffect, typeSpeed);
    i++;

    return;
  }
  wrap.style.borderRight = "none";
};

let openNav = document.querySelector(".nav__open");
let closeNav = document.querySelector(".nav__close");

let navLinks = document.querySelector(".nav__links-wrapper");

const navToggle = () => {
  openNav.addEventListener("click", () => {
    navLinks.classList.add("show");
  });

  closeNav.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
};

window.onload = () => {
  typeWriterEffect();

  navToggle();
};
