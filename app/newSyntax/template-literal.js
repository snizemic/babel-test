import { log, logTitle } from '../windowLogger';

export default function(){
  logTitle('Template Literal');

  const name = 'Maria';
  const surename = 'Sanchez';

  log(`My name is ${name} ${surename}`);

}