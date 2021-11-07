import { randomNumber } from '../random.js';
import processGameRound from './index.js';

const isEven = (number) => number % 2 === 0;

const evenGameRound = () => {
  const number = randomNumber(0, 100);

  console.log(`Question: ${number}`);
  return isEven(number) ? 'yes' : 'no';
};

const even = () => {
  processGameRound(evenGameRound, 'Answer "yes" if the number is even, otherwise answer "no".');
};

export default even;
