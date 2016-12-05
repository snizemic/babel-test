import { log, logTitle } from '../windowLogger';

export default function () {
  logTitle('Arrow Functions');

  const add = (n1, n2) => {
    return n1 + n2;
  }

  const mod = (n1, n2) => n1 % n2;

  const printMe = name => `My name is ${name}.`;


  log(add(2, 3));
  log(mod(5, 2));
  log(printMe('Max'));



}