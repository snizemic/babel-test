import pi from './pi';
import api from './api';
import Person from './person';
import { add, mod } from './math';
import { log, logTitle } from '../windowLogger';

export default function () {
  logTitle('Single Default Exports');
  log(pi);
  log(api('Charles'));

  var person = new Person();
  person.toString();

  log('---------------');
  log(add(10, 10));
  log(mod(45, 8));
}