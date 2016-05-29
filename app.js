'use strict;'

const fs = require('fs');
const es = require('event-stream');
const jsonStream = require('JSONStream');

const generatePayslip = require('./lib/generatePayslip').generatePayslip;

// Input & output files
const inputEmployees = fs.createReadStream(`${process.cwd()}/data/inputEmployees.json`);
const outputPayslips = fs.createWriteStream(`${process.cwd()}/data/outputPayslips.json`);

// Process each employee record into a payslip
inputEmployees
  .pipe(jsonStream.parse('*'))
  .pipe(es.mapSync((employee) => generatePayslip(employee)))
  .pipe(jsonStream.stringify())
  .pipe(outputPayslips)
  .on('error', function(err) {

    console.error(err);
    process.exit(-1);
  });
