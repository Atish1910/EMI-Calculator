function calculateEMI() {
  // Fetching user inputs
  var loanAmount = parseFloat(document.getElementById('loanAmount').value);
  var interestRate = parseFloat(document.getElementById('interestRate').value) / 1200; // Monthly interest rate
  var loanTenure = parseFloat(document.getElementById('loanTenure').value) * 12; // Loan tenure in months

  // Fetching advance payment
  var advancePayment = parseFloat(document.getElementById('advancePayment').value);

  // Validating advance payment range
  if (advancePayment > loanAmount * 0.5) {
    document.getElementById('result').innerHTML = 'Advance payment must be less than or equal to 50% of the loan amount.';
    return;
  }

  // Adjusting loan amount by subtracting the advance payment
  var adjustedLoanAmount = loanAmount - advancePayment;

  // Calculating EMI using the formula
  var emi = (adjustedLoanAmount * interestRate * Math.pow((1 + interestRate), loanTenure)) / (Math.pow((1 + interestRate), loanTenure) - 1);

  // Displaying the result
  document.getElementById('result').innerHTML = 'Your Monthly EMI: ₹' + emi.toFixed(2);
}

// Update the displayed interest rate value when the range input changes
function updateInterestRateDisplay() {
  var interestRate = document.getElementById('interestRate').value;
  document.getElementById('interestRateDisplay').innerHTML = 'Interest Rate (' + interestRate + '%)';
}

// Update the displayed loan tenure value when the range input changes
function updateLoanTenureDisplay() {
  var loanTenure = document.getElementById('loanTenure').value;
  document.getElementById('loanTenureDisplay').innerHTML = 'Duration (' + loanTenure + ' Year)';
}

// Update the displayed advance payment value in ₹ when the range input changes
function updateAdvancePaymentDisplay() {
  var advancePayment = parseFloat(document.getElementById('advancePayment').value);
  document.getElementById('advancePaymentDisplay').innerHTML = 'Advance Payment (₹' + advancePayment.toFixed(2) + ')';
}

// Update the maximum value of advance payment range based on loan amount
function updateAdvancePaymentMax() {
  var loanAmount = parseFloat(document.getElementById('loanAmount').value);
  document.getElementById('advancePayment').max = loanAmount * 0.5;
  document.getElementById('advancePayment').value = 0; // Reset to minimum when loan amount changes
  updateAdvancePaymentDisplay();
}
