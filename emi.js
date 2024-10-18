function calculateEMI() {
    var loanAmount = document.getElementById('loanAmount').value;
    var interestRate = document.getElementById('interestRate').value / 1200;
    var loanTenure = document.getElementById('loanTenure').value * 12;

    var emi = (loanAmount * interestRate * Math.pow((1 + interestRate), loanTenure)) / (Math.pow((1 + interestRate), loanTenure) - 1);

    document.getElementById('result').innerHTML = 'Your Monthly EMI: ₹' + emi.toFixed(2);
} 