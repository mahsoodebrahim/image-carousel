const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

leftArrow.addEventListener("click", () => {
  const activeImage = document.querySelector(".active");
  const previousImage = activeImage.previousElementSibling;
  activeImage.classList.remove("active");

  if (previousImage !== null) {
    previousImage.classList.add("active");
  } else {
    activeImage.parentElement.lastElementChild.classList.add("active");
  }
});

rightArrow.addEventListener("click", () => {
  const activeImage = document.querySelector(".active");
  const nextImage = activeImage.nextElementSibling;
  activeImage.classList.remove("active");

  if (nextImage !== null) {
    nextImage.classList.add("active");
  } else {
    activeImage.parentElement.firstElementChild.classList.add("active");
  }
});
