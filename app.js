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
  // Stream employee object from JSON file
  .pipe(jsonStream.parse('*'))
  // Generate payslip object
  .pipe(es.mapSync((employee) => generatePayslip(employee)))
  // Prepare payslip for text output
  .pipe(jsonStream.stringify())
  // Output to file
  .pipe(outputPayslips)
  // Log any errors but continue processing
  .on('error', (err) => console.error(err));

outputPayslips.on('close', function() {

  console.log('FINISHED.');
});
