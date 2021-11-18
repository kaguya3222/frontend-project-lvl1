import { randomNumber } from '../random.js';
import { processGameRound, getCorrectPredicateGameAnswer, predicateGameTask } from '../index.js';

const isEven = (number) => number % 2 === 0;

const evenGameRound = () => {
  const number = randomNumber(0, 100);

  return getCorrectPredicateGameAnswer(isEven, number);
};

const even = () => {
  processGameRound(evenGameRound, predicateGameTask);
};

export default even;
