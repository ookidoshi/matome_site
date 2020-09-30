// let daytime = document.querySelector(".daytime");
// let jin = document.querySelector(".jin");

// addEventListener("keypress", function (x) {

//   if (x.which === 13) {
//     daytime.classList.toggle("moving");
//     jin.classList.toggle("bouncing");
//   }
// })



function clickTest() {
  target = document.getElementById("anime_test");
  if (target.className == null || target.className == "") {
    target.className = "active";
  } else {
    target.className = "";
  }
}


/*
 * Copyright 2019 Asa
 * Released under the MIT license
 * See https://github.com/a01sa01to/Hover_colorChange/blob/master/LICENSE
 *
 */
(() => {
  hoverColorChange = {
    "txtColor": true,
    "attr": "hovercolor",
    "init": () => {
      document.querySelectorAll(`[${hoverColorChange.attr}]`).forEach(e => {
        e.addEventListener('mouseover', () => {
          if (hoverColorChange.txtColor) { e.style.color = e.getAttribute(hoverColorChange.attr); }
          else { e.style.backgroundColor = e.getAttribute(hoverColorChange.attr); }
        });
        e.addEventListener('mouseout', () => {
          if (hoverColorChange.txtColor) { e.style.color = ""; }
          else { e.style.backgroundColor = ""; }
        });
      });
    }
  }
  window.addEventListener('load', hoverColorChange.init);
})();
