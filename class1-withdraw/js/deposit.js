document.getElementById('deposite').addEventListener('click', function () {
    //get the ammount deposited
    const depositeInput = document.getElementById('deposit-input');
    const newDepositeAmout = parseInt(depositeInput.value);
    const depositTotal = document.getElementById('depo');
    const previousDepoAmount = parseInt(depositTotal.innerText);
    const newDepositeTotal = parseInt(previousDepoAmount + newDepositeAmout);
    depositTotal.innerText = newDepositeTotal;
    depositeInput.value = '';

    //Update balance Total
    const balance = document.getElementById('balanceAcc');
    const previousBalance = parseInt(balance.innerText);
    const newBalance = parseInt(previousBalance + newDepositeTotal);
    balance.innerText = newBalance;
    depositeInput.value = '';


});

//for withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const ammountWithdraw = document.getElementById('input-withdraw');
    const newWithdraw = ammountWithdraw.value;
    const numberWithdraw = parseFloat(newWithdraw);
    console.log(numberWithdraw);
    //set withdraw field
    const withdrawPart = document.getElementById('withdraw-balance');
    const withdrawtext = withdrawPart.innerText;
    const withdrawNum = parseFloat(withdrawtext);
    withdrawPart.innerText = numberWithdraw + withdrawNum;
    //reduction All Balance
    const balance = document.getElementById('balanceAcc');
    const previousBalance = parseInt(balance.innerText);
    const newBalance = parseFloat(previousBalance - numberWithdraw);
    balance.innerText = newBalance;
    ammountWithdraw.value = '';



})