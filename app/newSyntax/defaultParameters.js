import { log, logTitle } from '../windowLogger';

export default function () {
  logTitle('Default Parameters');

  const calculatePay = (yearSalary, bonus = 0) => {
    return yearSalary + bonus;
  }


  const employeeSalary = calculatePay(34000, 6500);
  log(employeeSalary);

  



}