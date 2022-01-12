const tipCalculator = document.querySelector(".tipCalculator");
const showTipPerPerson = document.querySelector(".tip-per-person");
const showTotal = document.querySelector(".amount-total");
const errorMsg = document.querySelectorAll(".error-msg");

//object to keep data:
const data = {
  bill: 0,
  tip: 0,
  person: 0,
};

//add event listener on tip calculator form:
tipCalculator.addEventListener("change", function (e) {
  if (validateInput(e.target.value)) {
    //handle error message:
    for (let msg of errorMsg) {
      msg.style.display = "none";
    }

    //store the targeted input value in our existing object:
    data[e.target.name] = parseFloat(e.target.value);

    //calculate total tip:
    const tip = (data.bill * data.tip) / 100;
    //calculate total amount:
    let total = data.bill + tip;
    //total per person:
    total = total / data.person;
    total = total.toFixed(2);

    //calculate tip per person:
    let perPersonTip = tip / data.person;
    perPersonTip = perPersonTip.toFixed(2);

    //show the per person tip data:
    showTipPerPerson.textContent = perPersonTip;
    //show the per person total amount data:
    showTotal.textContent = total;
  } else {
    for (let msg of errorMsg) {
      msg.style.display = "block";
    }
  }
});

const validateInput = (input) => {
  return (/^\d+$/).test(input);
};
