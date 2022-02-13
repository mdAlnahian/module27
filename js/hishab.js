// deposit er hishab nikash
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const depositInputText = depositInput.value;
    const depositInputTextAmount = parseFloat(depositInputText);

    const depositMoney = document.getElementById("depo-money");
    const depositCurrent = depositMoney.innerText;
    const depositCurrentText = parseFloat(depositCurrent);
    depositMoney.innerText = depositInputTextAmount + depositCurrentText;

    // total balance adding with deposit
    const totalMoney = document.getElementById("total-money");
    const totalMoneyInput = totalMoney.innerText;
    const totalMoneyInputReal = parseFloat(totalMoneyInput);
    totalMoney.innerText = totalMoneyInputReal + depositInputTextAmount;
    //clearing the value
    depositInput.value = "";
  });

// using withdraw we are now going calculate the withdraw amount
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputText = withdrawInput.value;
    const withdrawInputTextAmount = parseFloat(withdrawInputText);
    // console.log(withdrawInputTextAmount);
    const withdrawMoney = document.getElementById("utao-money");
    const withdrawCurrent = withdrawMoney.innerText;
    const withdrawCurrentText = parseFloat(withdrawCurrent);
    withdrawMoney.innerText = withdrawCurrentText + withdrawInputTextAmount;

    // updating the final balance after withdrawing money
    const totalMoney = document.getElementById("total-money");
    const totalMoneyInput = totalMoney.innerText;
    const totalMoneyInputReal = parseFloat(totalMoneyInput);
    totalMoney.innerText = totalMoneyInputReal - withdrawInputTextAmount;

    withdrawInput.value = "";
  });
