const navArea = document.getElementById("nav-area");

//EX-1:
document.addEventListener("scroll", scrollEffect);
function scrollEffect() {
  let scrollNav = window.scrollY;
  if (scrollNav >= 100) {
    navArea.classList.add("nav-bg");
  } else {
    navArea.classList.remove("nav-bg");
  }
}

//Ex-2:
// window.onscroll = () => {
//   let scrollNav = window.scrollY;
//   if (scrollNav >= 100) {
//     navArea.classList.add("nav-bg");
//   } else {
//     navArea.classList.remove("nav-bg");
//   }
// };
