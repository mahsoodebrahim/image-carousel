const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

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

function changeImage(forwardOrBackward) {
  const activeImage = document.querySelector(".active-img");
  const nextImage =
    forwardOrBackward === "forward"
      ? activeImage.nextElementSibling
      : activeImage.previousElementSibling;

  activeImage.classList.remove("active-img");

  if (nextImage !== null) {
    nextImage.classList.add("active-img");
  } else {
    const imageParentElement = activeImage.parentElement;
    forwardOrBackward === "forward"
      ? imageParentElement.firstElementChild.classList.add("active-img")
      : imageParentElement.lastElementChild.classList.add("active-img");
  }
}

function changeDotNavigation(forwardOrBackward) {
  const activeDot = document.querySelector(".active-dot");
  const nextDot =
    forwardOrBackward === "forward"
      ? activeDot.nextElementSibling
      : activeDot.previousElementSibling;

  activeDot.classList.remove("active-dot");

  if (nextDot !== null) {
    nextDot.classList.add("active-dot");
  } else {
    const dotParentElement = activeDot.parentElement;
    forwardOrBackward === "forward"
      ? dotParentElement.firstElementChild.classList.add("active-dot")
      : dotParentElement.lastElementChild.classList.add("active-dot");
  }
}

function changeImageAndNavigation(forwardOrBackward) {
  changeImage(forwardOrBackward);
  changeDotNavigation(forwardOrBackward);
}
