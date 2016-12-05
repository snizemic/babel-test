import { log, logTitle } from '../windowLogger';

export default function () {
  logTitle('Destructing Assingment');

  const arrays = () => {
    const numbers = [1, 2, 3, 4, 5];

    const [one, , three, ...rest] = numbers;

    log(one);
    // log(two);
    log(three);
    log(rest);


    const getNames = () => {
      return ['Anna', 'Alex', 'Cheryl'];
    }

    const [anna, , cheryl] = getNames();

    log(anna);
    log(cheryl);
  }


  const responses = [
    {
      statusCode: 200,
      data: {
        person: {
          name: 'John',
          address: {
            city: 'London',
            country: 'England'
          }
        }
      }
    },
    {
      statusCode: 301,
      data: {
        person: {
          name: 'Max',
          address: {
            city: 'Prague',
            country: 'Czech Republic'
          }
        }
      }
    },
    {
      statusCode: 200,
      data: {
        person: {
          name: 'Alex',
          address: {
            city: 'New York',
            country: 'USA'
          }
        }
      }
    }
  ]


  for (const {statusCode, data: { person: { name } } } of responses) {        
    log(statusCode);
    log(name);
    log('----------------');
  }





}