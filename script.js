const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

function changeImageAndNavigation(forwardOrBackward) {
  const activeImage = document.querySelector(".active-img");
  const nextImage =
    forwardOrBackward === "forward"
      ? activeImage.nextElementSibling
      : activeImage.previousElementSibling;

  const activeDot = document.querySelector(".active-dot");
  const nextDot =
    forwardOrBackward === "forward"
      ? activeDot.nextElementSibling
      : activeDot.previousElementSibling;

  activeImage.classList.remove("active-img");
  activeDot.classList.remove("active-dot");

  if (nextImage !== null) {
    nextImage.classList.add("active-img");
    nextDot.classList.add("active-dot");
  } else {
    const imageParentElement = activeImage.parentElement;
    forwardOrBackward === "forward"
      ? imageParentElement.firstElementChild.classList.add("active-img")
      : imageParentElement.lastElementChild.classList.add("active-img");

    const dotParentElement = activeDot.parentElement;
    forwardOrBackward === "forward"
      ? dotParentElement.firstElementChild.classList.add("active-dot")
      : dotParentElement.lastElementChild.classList.add("active-dot");
  }
}

leftArrow.addEventListener("click", () => {
  changeImageAndNavigation("backward");
});

rightArrow.addEventListener("click", () => {
  changeImageAndNavigation("forward");
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
