import pi from './modules/pi';
import api from './modules/api';
import Person from './modules/person';
import {add, mod} from './modules/math';

console.log(pi);
console.log(api('Charles'));

var person = new Person();
person.toString();

console.log('---------------');
console.log(add(10, 10));
console.log(mod(45, 8));