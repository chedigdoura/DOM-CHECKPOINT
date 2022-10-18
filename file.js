const plusButtons = document.querySelectorAll(".plus");
const quantitieOfItems = document.querySelectorAll(".x");
const minusButtons = document.querySelectorAll(".minus");
const priceOfItems = document.querySelectorAll(".price");
let sumOfTotal = document.querySelector("#sum");
let cartSelect = document.querySelectorAll(".card");
const deleteItem = document.querySelectorAll(".btn-primary");
let totalPrice = document.querySelectorAll(".x")
let oneItemPrice = document.querySelectorAll(".price")

for (let i = 0; i < plusButtons.length; i++) {
  plusButtons[i].addEventListener("click", function (e) {
    quantitieOfItems[i].innerHTML++;
    sumOfTotal.innerHTML =
      Number(sumOfTotal.innerHTML) + Number(priceOfItems[i].innerHTML);
  });
}

for (let i = 0; i < minusButtons.length; i++) {
  minusButtons[i].addEventListener("click", function (e) {
    if (quantitieOfItems[i].innerHTML > 0) {
      quantitieOfItems[i].innerHTML--;
      sumOfTotal.innerHTML =
        Number(sumOfTotal.innerHTML) - Number(priceOfItems[i].innerHTML);
    } else {
      return;
    }
  });
}

for (let i = 0; i < deleteItem.length; i++) {
  deleteItem[i].addEventListener("click", function (e) {
    cartSelect[i].remove();
    sumOfTotal.innerHTML = Number(sumOfTotal.innerHTML) - 
    ( (Number(totalPrice[i].innerHTML)) * (Number(oneItemPrice[i].innerHTML)));
  });
}


function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}
