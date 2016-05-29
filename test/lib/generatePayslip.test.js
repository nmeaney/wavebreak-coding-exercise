const test = require('tap');
const taxTable = require('australian-tax-rate');

// Module under test
const generatePayslip = require('../../lib/generatePayslip.js').generatePayslip;

// Test data
const employees = require('../../data/inputEmployees.json');
const payslips = require('../../data/outputPayslipsExpected.json');

// Support values
const emptyObject = {};

// Test correct operation
employees.forEach(function(employee, index) {

  test.deepEqual(payslips[index], generatePayslip(employee), `Payslip generated correctly for employee ${index}`);
});

// Test invalid input object returns emptyObject
test.deepEqual(emptyObject, generatePayslip(null), 'generatePayslip returns emptyObject if argument is not an object');

// Test missing field in input object returns emptyObject
let alteredEmployee = employees[1];
delete alteredEmployee.pensionRate;
test.deepEqual(emptyObject, generatePayslip(alteredEmployee), 'generatePayslip returns empty object if argument is missing a required field');
