function getMoney(fieldId, amount) {
    const newInputMoney = parseFloat(amount);
    const amountInput = document.getElementById(fieldId);
    const oldAmount = amountInput.innerText;
    const prevAmount = parseFloat(oldAmount);
    const newTotalMoney = prevAmount + newInputMoney;
    amountInput.innerText = newTotalMoney;
}
function getTotalMoney(amount, isAdded) {
    const newInputMoney = parseFloat(amount);
    const totalAmountInput = document.getElementById('total-balance');
    const oldTotalAmount = totalAmountInput.innerText;
    const newTotalAmount = parseFloat(oldTotalAmount);
    let totalBalance;
    if (isAdded == true) {
        totalBalance = newTotalAmount + newInputMoney;
    }
    if (isAdded == false) {
        totalBalance = newTotalAmount - newInputMoney;
    }
    totalAmountInput.innerText = totalBalance;
}


document.getElementById('deposit-submit').addEventListener('click', function () {
    let inputDepositAmount = document.getElementById('deposit-input').value;
    if (inputDepositAmount > 0) {
        getMoney('deposit', inputDepositAmount);
        getTotalMoney(inputDepositAmount, true);
    }
    document.getElementById('deposit-input').value = '';

})
document.getElementById('withdraw-submit').addEventListener('click', function () {
    let inputWithdrawAmount = document.getElementById('withdraw-input').value;
    if (inputWithdrawAmount > 0) {
        getMoney('withdraw', inputWithdrawAmount);
        getTotalMoney(inputWithdrawAmount, false);
    }
    document.getElementById('withdraw-input').value = '';

});

// 