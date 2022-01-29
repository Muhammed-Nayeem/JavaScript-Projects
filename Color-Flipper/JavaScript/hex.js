const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.getElementById("color");
const button = document.getElementById("click-btn");

button.addEventListener("click", () => {
  let body = document.body;
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
