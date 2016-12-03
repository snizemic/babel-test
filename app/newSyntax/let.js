import { log, logTitle } from '../windowLogger';

export default function(){
  logTitle('Let Keyword');


  if(true){
    let pi = 3.1415;
  }

  // log(pi);

  for(let i = 0; i < 10; i++){
    log(i);
  }

  // log(i);

}