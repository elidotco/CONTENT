const indexes = document.querySelectorAll(".indexes li");
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

function reset() {
  for (let i = 0; i < tabs.length; i++) {
    indexes[i].style.borderColor = "transparent";
    tabs[i].style.zIndex = 0;
    tabs[i].classList.remove("active");
    contents[i].classList.remove("active");
  }
}

function showTab(i) {
  indexes[i].style.borderColor = "rgba(211,38,38,0.6)";
  tabs[i].style.opacity = 1;
  tabs[i].style.zIndex = 5;
  tabs[i].classList.add("active");
  contents[i].classList.add("active");
}

function activate(e) {
  if (!e.target.matches(".indexes li")) return;
  reset();
  showTab(e.target.dataset.index);
}

const init = () => showTab(0);

window.addEventListener("load", init, false);
window.addEventListener("click", activate, false);
