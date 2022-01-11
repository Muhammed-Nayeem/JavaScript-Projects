// select all the elements & assigning them to variables:
const stats = document.getElementById("stats");
const startBtn = document.getElementById("start-btn");
const clickBtn = document.getElementById("click-btn");

const winScore = 10; // win score;
let count = 0; // initial counting value;

// start button event listener:
startBtn.addEventListener("click", () => {
  start();
});

// click button event listener:
clickBtn.addEventListener("click", () => {
  count++;
  stats.textContent = count;
});

// define start function:
const start = () => {
  count = 0;
  stats.textContent = count;
  clickBtn.removeAttribute("disabled");
  countingStart();
};

// define countingStart function:
const countingStart = () => {
  setTimeout(() => {
    if (isWin()) {
      stats.textContent = "You Won!";
    } else {
      stats.textContent = "You Lost!";
    }
    clickBtn.setAttribute("disabled", true);
  }, 2000);
};

// define isWin function:
const isWin = () => {
  if (count < winScore) {
    return false;
  } else {
    return true;
  }
};
