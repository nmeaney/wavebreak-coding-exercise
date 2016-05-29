'use strict;'

const fs = require('fs');
const es = require('event-stream');
const jsonStream = require('JSONStream');

const generatePayslip = require('./lib/generatePayslip').generatePayslip;

// Input & output files
const employeesInput = fs.createReadStream(`${process.cwd()}/data/employees.json`);
const payslipsOutput = fs.createWriteStream(`${process.cwd()}/data/payslips.json`);

// Process each employee record into a payslip
employeesInput
  .pipe(jsonStream.parse('*'))
  .pipe(es.mapSync((employee) => generatePayslip(employee)))
  .pipe(jsonStream.stringify())
  .pipe(payslipsOutput)
  .on('error', function(err) {

    console.error(err);
    process.exit(-1);
  });
