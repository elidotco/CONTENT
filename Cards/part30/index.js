"use strict";
const tabs = document.querySelectorAll("[data-id]");
const contents = document.querySelectorAll("[data-content]");
let id = 0;

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabs[id].classList.remove("active");
    tab.classList.add("active");
    id = tab.getAttribute("data-id");
    contents.forEach(function (box) {
      box.classList.add("hide");
      if (box.getAttribute("data-content") == id) {
        box.classList.remove("hide");
        box.classList.add("show");
      }
    });
  });
});
