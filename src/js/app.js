"use strict";

const acontainer = document.querySelector(".acontainer");
const formBox = document.querySelector("#formBox");
const nextButton = document.getElementById("NexP");

formBox.addEventListener("submit", (e) => {
  e.preventDefault();

  setTimeout(() => {
    acontainer.style.opacity = 0;
    setTimeout(() => {
      acontainer.remove();
      const nextSection = document.querySelector("#nextSection");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  }, 500);
});

nextButton.addEventListener("click", (e) => {
  e.preventDefault();

  acontainer.style.opacity = 0;
  setTimeout(() => {
    acontainer.remove();
    const nextSection = document.querySelector("#nextSection");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }, 500);
});
``;

const boxes = document.querySelectorAll('.check-box > div');

boxes.forEach(box => {
    box.addEventListener('click', () => {
    
        boxes.forEach(b => b.classList.remove('selected'));
    
        box.classList.add('selected');
    });
});
``