const typewrite = document.querySelector('.typewrite');
const text = typewrite.dataset.word;
let i = 0;

const navArea = document.querySelector(".nav__area");

const typeWriterEffect = () => {
  while (i < text.length) {
    typewrite.firstElementChild.innerHTML += text[i];
    setTimeout(typeWriterEffect, 100);
    i++;
    return;
  }
};

const navToggle = () => {
  document.querySelector('.area__open').addEventListener('click', () => {
    navArea.classList.add('nav__area--show');
    navArea.classList.remove('nav__area--hide');
  });

  document.querySelector('.area__close').addEventListener('click', () => {
    navArea.classList.remove('nav__area--show');
    navArea.classList.add('nav__area--hide');
  });
};

typeWriterEffect();
navToggle();

