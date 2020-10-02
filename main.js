function clickTest() {
  target = document.getElementById("anime_test");
  if (target.className == null || target.className == "") {
    target.className = "active";
  } else {
    target.className = "";
  }
}



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
