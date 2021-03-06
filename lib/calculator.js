'use strict';

const taxRate = require('australian-tax-rate');

// Avoid magic numbers
const monthCount = 12;
const percent = 100;

exports.calculator = function(annualSalary, pensionRate) {

  // Basic input validation
  if (isNaN(annualSalary) || isNaN(pensionRate)) {

    if (process.env.NODE_ENV !== 'test') {

      console.error('ERROR > invalid argument >', annualSalary, '>', pensionRate);
    }

    // Don't throw - allow processing to continue
    return {};
  }

  // Do calculations
  const grossIncome = Math.round(annualSalary / monthCount);
  const incomeTax = Math.round(grossIncome - annualSalary * (1 - taxRate(annualSalary)) / monthCount);
  const pension = Math.round(grossIncome * (pensionRate / percent));

  return {

    grossIncome,
    incomeTax,
    pension
  };
};
