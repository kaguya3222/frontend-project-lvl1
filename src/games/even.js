import randomNumber from '../random.js';
import processGameRound from '../index.js';
import { getPredicateGameRoundResult, getPredicateGameTask } from './predicate.js';

const isEven = (number) => number % 2 === 0;

const evenGameRound = () => {
  const number = randomNumber(0, 100);

  return getPredicateGameRoundResult(isEven, number);
};

const task = getPredicateGameTask('number is even');

export default () => {
  processGameRound(evenGameRound, task);
};
