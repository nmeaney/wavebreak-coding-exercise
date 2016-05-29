const test = require('tap');
const taxTable = require('australian-tax-rate');

// Module under test
const calculator = require('../../lib/calculator.js').calculator;

// Test data
const employees = require('../../data/inputEmployees.json');
const payslips = require('../../data/outputPayslipsExpected.json');

// Support values
const emptyObject = {};
const notNumber = 'Not a Number';

// Test correct operation
employees.forEach(function(employee, index) {

  // Prepare expected calculation output
  let expectedOutput = {

    'grossIncome': payslips[index].grossIncome,
    'incomeTax': payslips[index].incomeTax,
    'pension': payslips[index].pension
  };

  test.deepEqual(expectedOutput, calculator(employee.annualSalary, employee.pensionRate), 'calculator calculated correctly');
});

// Test rounding
const expectedMonthlyIncomeRounded = 5005;
test.equal(expectedMonthlyIncomeRounded, calculator(60055.20, 10).grossIncome, 'calculator rounds correctly');

// Test invalid argument
test.deepEqual(emptyObject, calculator(), 'calculator returns empty object if no arguments supplied');
test.deepEqual(emptyObject, calculator(notNumber, notNumber), 'calculator returns empty object if argument is not a number');
