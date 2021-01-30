//initial variable
let firstClass = 0;
let economy = 0;
let subTotal = 0;
let vat = 0;
let total = 0;

//DOM variable
let firstClassInput = document.getElementById("firstClass");
let economyClassInput = document.getElementById("ecomonyClass");
let plusBtnFirstClass = document.querySelector(".plus_btn_firstCLass");
let plusBtnEconomy = document.querySelector(".plus_btn_economy");
let minusBtnFirstClass = document.querySelector(".minus_btn_firstClass");
let minusBtnEconomy = document.querySelector(".minus_btn_economy");
let subtotalID = document.getElementById("subtotal");
let vatID = document.getElementById("vat");
let totalID = document.getElementById("total");

//handle fucntion
function handleSubTotal(val, val2) {
  subTotal = 0;
  subTotal += val * 150;
  subTotal += val2 * 100;

  if (subTotal < 0) {
    subTotal = 0;
  }
  vat = subTotal / 10;
  total = subTotal + vat;
}

plusBtnFirstClass.addEventListener("click", function () {
  firstClass++;
  handleSubTotal(firstClass, economy);
});

plusBtnEconomy.addEventListener("click", function () {
  economy++;
  handleSubTotal(firstClass, economy);
});

//handle minus btn
minusBtnFirstClass.addEventListener("click", function () {
  firstClass--;
  handleSubTotal(firstClass, economy);
});
minusBtnEconomy.addEventListener("click", function () {
  economy--;
  handleSubTotal(firstClass, economy);
});

//handle Frist claa input
firstClassInput.addEventListener("input", function (e) {
  firstClass = e.target.value;
  if (firstClass <= 0) {
    firstClass = 0;
  }
  handleSubTotal(firstClass, economy);
});

//handle economy class input
economyClassInput.addEventListener("input", function (e) {
  economy = e.target.value;
  if (economy <= 0) {
    economy = 0;
  }
  handleSubTotal(firstClass, economy);
});

//=========
setInterval(function () {
  if (firstClass <= 0) {
    firstClass = 0;
  }
  if (economy <= 0) {
    economy = 0;
  }
  firstClassInput.value = firstClass;
  economyClassInput.value = economy;
  subtotalID.innerText = subTotal;
  vatID.innerText = vat;
  totalID.innerText = total;
}, 10);

document.querySelector(".btn-style").addEventListener("click", function () {
  if (firstClass > 0 || economy > 0) {
    alert(
      "Your Booking is successfully done! \nFirstclass : " +
        firstClass +
        "\nEconomy : " +
        economy +
        "\n" +
        "Total Amount : " +
        total +
        "$"
    );
  }
});
