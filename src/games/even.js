import { randomNumber } from '../random.js';
import processGameRound from '../index.js';
import { getCorrectPredicateGameAnswer, predicateGameTask } from './predicate.js';

const isEven = (number) => number % 2 === 0;

const evenGameRound = () => {
  const number = randomNumber(0, 100);

  return getCorrectPredicateGameAnswer(isEven, number);
};

const even = () => {
  processGameRound(evenGameRound, predicateGameTask);
};

export default even;
