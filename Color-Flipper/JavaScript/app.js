const colors = ["green", "red", "rgb(255, 99, 71)", "#3cb371"];

const color = document.getElementById("color");
const button = document.getElementById("click-btn");

button.addEventListener("click", () => {
  let body = document.body;
  let randomNum = getRandomNumber();
  body.style.backgroundColor = colors[randomNum];
  color.textContent = colors[randomNum];
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
