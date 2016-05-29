'use strict';

const taxRate = require('australian-tax-rate');

// Avoid magic numbers
const monthCount = 12;
const percent = 100;
const zero = 0;


// Example Calculation:
//
// Employee annual salary is 60,050, pension rate is 9%, how much will this employee be paid for the month of March?
// 1. pay period = Month of March (01 March to 31 March)
// 2. gross income = 60,050 / 12 = 5,004.16666667 (round down) = 5,004
// 3. income tax = (3,572 + (60,050 - 37,000) x 0.325) / 12 = 921.9375 (round up) = 922
// 4. net income = 5,004 - 922 = 4,082
// 5. pension contribution = 5,004 x 9% = 450.36 (round down) = 450

exports.calculator = function(annualSalary, pensionRate) {

  // Basic input validation
  if (isNaN(annualSalary) || isNaN(pensionRate)) {

    console.error('ERROR > invalid argument >', annualSalary, '>', pensionRate);
    return {}; // Don't throw - allow processing to continue
  }

  const grossIncome = Math.round(annualSalary / monthCount);
  const incomeTax = Math.round(grossIncome - annualSalary * (1 - taxRate(annualSalary)) / monthCount);
  const pensionContribution = Math.round(grossIncome * (pensionRate / percent));

  return {

    grossIncome,
    incomeTax,
    pensionContribution
  };
};
