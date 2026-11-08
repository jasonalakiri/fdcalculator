function CalMaturityAmount() {
    //inputs values
    const principles = parseFloat(document.getElementById('principle').value);
    const interests = parseFloat(document.getElementById('interestRate').value);
    const tenures = parseFloat(document.getElementById('tenure').value);
   
    //calculations 
    const maturityAmount = principles + (principles * interests * tenures)/100;
   
    //result
   document.getElementById('result').innerText = `Maturity Amount $${maturityAmount.toFixed(2)}`;
}
document.getElementById('calculateBtn').addEventListener('click', CalMaturityAmount);