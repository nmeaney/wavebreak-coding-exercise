'use strict';

const calculator = require('./calculator').calculator;

exports.generatePayslip = function(employee) {

  // Basic input validation
  if (!employee ||
      !employee.firstName ||
      !employee.lastName ||
      !employee.paymentStartDate ||
      !employee.annualSalary ||
      !employee.pensionRate) {

    console.error('ERROR > invalid argument >', JSON.stringify(employee));
    return {}; // Don't throw - allow processing to continue
  }

  const payslipData = calculator(employee.annualSalary, employee.pensionRate);

  const payslip = {

    'name': `${employee.firstName} ${employee.lastName}`,
    'payPeriod': `${employee.paymentStartDate}`,
    'grossIncome': payslipData.grossIncome,
    'incomeTax': payslipData.incomeTax,
    'netIncome': payslipData.grossIncome - payslipData.incomeTax,
    'super': payslipData.pensionContribution
  };

  console.log('INPUT >', JSON.stringify(employee));
  console.log('> OUTPUT >', JSON.stringify(payslip));
  return payslip;
}
