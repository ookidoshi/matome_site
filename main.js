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



