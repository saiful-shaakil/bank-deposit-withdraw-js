function getMoney(fieldId, amount) {
    const prevInputMoney = amount.value;
    const newInputMoney = parseFloat(prevInputMoney);
    const amountInput = document.getElementById(fieldId);
    const oldAmount = amountInput.innerText;
    const prevAmount = parseFloat(oldAmount);
    const newTotalMoney = prevAmount + newInputMoney;
    amountInput.innerText = newTotalMoney;
    amount.value = '';
};
function getTotalMoney(fieldId, isAdded) {
    const inputAmount = document.getElementById(fieldId);
    const oldAmount = inputAmount.innerText;
    const newAmount = parseFloat(oldAmount);
    const totalAmountInput = document.getElementById('total-balance');
    const oldTotalAmount = totalAmountInput.innerText;
    const newTotalAmount = parseFloat(oldTotalAmount);

}


document.getElementById('deposit-submit').addEventListener('click', function () {
    const inputDepositAmount = document.getElementById('deposit-input');
    getMoney('deposit', inputDepositAmount);
    getTotalMoney();

})
document.getElementById('withdraw-submit').addEventListener('click', function () {
    const inputWithdrawAmount = document.getElementById('withdraw-input');
    getMoney('withdraw', inputWithdrawAmount);

})