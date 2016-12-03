import { log, logTitle } from '../windowLogger';

export default function(){
  logTitle('Spread Operator');

  const csStudents = ['Matt', 'Antonio', 'Blazej'];
  const mathStudents = ['Jirka', 'Mirek', 'Karel'];

  const studentsFromCollege = [...csStudents, ...mathStudents];

  log(studentsFromCollege);

  const name = 'Maria';
  log([...name]);

}