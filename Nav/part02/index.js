// Designed by: Hoang Nguyen
// Original image: https://dribbble.com/shots/5919154-Tab-Bar-Label-Micro-Interaction

const buttons = document.querySelectorAll(".menu__item");
let activeButton = document.querySelector(".menu__item.active");

buttons.forEach((item) => {
  const text = item.querySelector(".menu__text");
  setLineWidth(text, item);

  window.addEventListener("resize", () => {
    setLineWidth(text, item);
  });

  item.addEventListener("click", function () {
    if (this.classList.contains("active")) return;

    this.classList.add("active");

    if (activeButton) {
      activeButton.classList.remove("active");
      activeButton.querySelector(".menu__text").classList.remove("active");
    }

    handleTransition(this, text);
    activeButton = this;
  });
});

function setLineWidth(text, item) {
  const lineWidth = text.offsetWidth + "px";
  item.style.setProperty("--lineWidth", lineWidth);
}

function handleTransition(item, text) {
  item.addEventListener("transitionend", (e) => {
    if (e.propertyName != "flex-grow" || !item.classList.contains("active"))
      return;

    text.classList.add("active");
  });
}
