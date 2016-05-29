const test = require('tap');
const taxTable = require('australian-tax-rate');

// Package under test
const generatePayslip = require('../lib/generatePayslip.js').generatePayslip;

// Test data
const employees = require('../data/employees');
const payslips = require('../data/expectedPayslips');

// Support values
const emptyObject = {};

// Test correct operation
test.deepEqual(payslips[0], generatePayslip(employees[0]), 'Payslip generated correctly for employee 1');
test.deepEqual(payslips[1], generatePayslip(employees[1]), 'Payslip generated correctly for employee 2');

// Test invalid input object returns emptyObject
test.deepEqual(emptyObject, generatePayslip(null), 'generatePayslip returns error if argument is not an object');

// Test missing field in input object returns emptyObject
let alteredEmployee = employees[1];
delete alteredEmployee.pensionRate;
test.deepEqual(emptyObject, generatePayslip(alteredEmployee), 'generatePayslip returns error if argument is missing a required field');
