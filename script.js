const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

leftArrow.addEventListener("click", () => {
  const activeImage = document.querySelector(".active-img");
  const previousImage = activeImage.previousElementSibling;

  const activeDot = document.querySelector(".active-dot");
  const previousDot = activeDot.previousElementSibling;

  activeImage.classList.remove("active-img");
  activeDot.classList.remove("active-dot");

  if (previousImage !== null) {
    previousImage.classList.add("active-img");
    previousDot.classList.add("active-dot");
  } else {
    activeImage.parentElement.lastElementChild.classList.add("active-img");
    activeDot.parentElement.lastElementChild.classList.add("active-dot");
  }
});

rightArrow.addEventListener("click", () => {
  const activeImage = document.querySelector(".active-img");
  const nextImage = activeImage.nextElementSibling;

  const activeDot = document.querySelector(".active-dot");
  const nextDot = activeDot.nextElementSibling;

  activeImage.classList.remove("active-img");
  activeDot.classList.remove("active-dot");

  if (nextImage !== null) {
    nextImage.classList.add("active-img");
    nextDot.classList.add("active-dot");
  } else {
    activeImage.parentElement.firstElementChild.classList.add("active-img");
    activeDot.parentElement.firstElementChild.classList.add("active-dot");
  }
});

(function () {
  const imgCount = document.querySelector(".img-container").childElementCount;
  const navigationDiv = document.getElementById("navigation-dots");

  for (let i = 0; i < imgCount; i++) {
    const dotSpan = document.createElement("span");
    dotSpan.classList.add("dot");

    if (i === 0) {
      dotSpan.classList.add("active-dot");
    }

    navigationDiv.appendChild(dotSpan);
  }
})();
