const acontainer = document.querySelector(".acontainer");
const formBox = document.querySelector("#formBox");
const nextButton = document.getElementById("NexP");

formBox.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = e.target.querySelector("input[name='type']");
  if (!nameInput.value) {
    alert("Please Enter Your Name");
    return;
  }

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
