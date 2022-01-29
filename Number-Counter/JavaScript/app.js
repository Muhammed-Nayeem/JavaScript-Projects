//Select the elements and assign them to variables:
const number = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

let count = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let styleBtn = e.currentTarget.classList;
    //increase, decrease and reset
    if (styleBtn.contains("decrease")) {
      count--;
    } else if (styleBtn.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    //set color style on count number based on increase and decrease
    if (count > 0) {
      number.style.color = "green";
    } else if (count < 0) {
      number.style.color = "red";
    } else {
      number.style.color = "#333";
    }

    //set the number
    number.textContent = count;
  });
});
