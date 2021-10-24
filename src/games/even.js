import { randomNumber } from '../random.js';
import {
  compareAnswers, getAnswer, getResult, greetings, processGameRound,
} from './index.js';

const isEven = (number) => number % 2 === 0;

const evenGameRound = () => {
  const number = randomNumber(0, 100);

  console.log(`Question: ${number}`);

  const answer = getAnswer();
  const expectedAnswer = isEven(number) ? 'yes' : 'no';

  return getResult(answer, expectedAnswer, compareAnswers.bind(null, answer, expectedAnswer));
};

const even = () => {
  greetings();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  processGameRound(evenGameRound);
};

export default even;
