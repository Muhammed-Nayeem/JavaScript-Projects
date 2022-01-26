let hexNumber = document.getElementById("hexnumber");
let color = document.getElementById("color");

color.addEventListener("input", () => {
  let inputColor = color.value;
  hexNumber.value = inputColor;
  document.getElementById("title").style.color = "white";
  document.body.style.backgroundColor = inputColor;
});
