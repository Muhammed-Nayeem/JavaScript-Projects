/**
 * Incremental Function:
 */
function increment(incdec, prc, itm) {
  let quantity1 = document.getElementById(incdec);
  let price = document.getElementById(prc);
  let item = document.getElementById(itm);
  let productAmount = document.getElementById("product-amount");
  let chargedAmount = document.getElementById("charged-amount");
  let totalAmount = document.getElementById("total-amount");

  if (quantity1.value >= 5) {
    quantity1.value = 5;
    alert("Maximum 5 products!");
  } else {
    quantity1.value++;
    let itemAddition = parseInt(price.innerHTML) + parseInt(item.innerHTML);
    item.innerHTML = itemAddition;

    //total product amount addition:
    let totalProductAmount = parseInt(price.innerHTML) + parseInt(productAmount.innerHTML);
    productAmount.innerHTML = totalProductAmount;

    //total amount:
    let totalAmountAddition = totalProductAmount + parseInt(chargedAmount.innerHTML);
    totalAmount.innerHTML = totalAmountAddition;

    //coupon box manage:
    let couponBox = document.querySelector(".coupon-box");
    if (totalAmountAddition >= 500) {
      couponBox.style.display = "block";
    }
  }
}

/**
 * Decremental Function:
 */
function decrement(incdec, prc, itm) {
  let quantity2 = document.getElementById(incdec);
  let price = document.getElementById(prc);
  let item = document.getElementById(itm);
  let productAmount = document.getElementById("product-amount");
  let chargedAmount = document.getElementById("charged-amount");
  let totalAmount = document.getElementById("total-amount");

  if (quantity2.value <= 0) {
    quantity2.value = 0;
    alert("Minimum 1 product");
  } else {
    quantity2.value--;
    let itemSubtraction = parseInt(item.innerHTML) - parseInt(price.innerHTML);
    item.innerHTML = itemSubtraction;

    //total product amount subtraction:
    let totalProductAmount = parseInt(productAmount.innerHTML) - parseInt(price.innerHTML);
    productAmount.innerHTML = totalProductAmount;

    //total amount:
    let totalAmountSubtraction = totalProductAmount + parseInt(chargedAmount.innerHTML);
    totalAmount.innerHTML = totalAmountSubtraction;
  }
}

/**
* Generate Random String By Creating an Array of String and random method;
* Coupon Box Manage:
* Coupon Code Manage:
*/
let couponCodes = ["COUPON-CODE","COUPON50","DISCOUNT50","FOOD-COUPON50"];
let randomCouponCode = couponCodes[Math.floor(Math.random() * couponCodes.length)];

//coupon code setting by randomly:
let couponCode = document.getElementById("coupon-code");
couponCode.textContent = randomCouponCode;

//coupon box properties:
let couponBox = document.querySelector(".coupon-box");
couponBox.style.display = "none";
let applyBtn = document.getElementById("apply-btn");

//add event listener on apply button:
applyBtn.addEventListener("click", () => {
  let couponInput = document.getElementById("coupon-code-input");
  let totalAmount = document.getElementById("total-amount");

  if (couponInput.value === couponCode.textContent) {
    let totalWithDiscount = parseInt(totalAmount.innerHTML) - 50;
    totalAmount.innerHTML = totalWithDiscount;
    alert("Congratulations!");
    couponBox.style.display = "none";
  } else {
    alert("Coupon does not match!");
  }
});
