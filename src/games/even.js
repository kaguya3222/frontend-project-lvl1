import getRandomNumber from '../random.js';
import runGame from '../index.js';
import { getPredicateGameRoundResult, getPredicateGameTask } from './predicate.js';

const isEven = (number) => number % 2 === 0;

const evenGameRound = () => {
  const number = getRandomNumber(0, 100);

  return getPredicateGameRoundResult(isEven, number);
};

const task = getPredicateGameTask('number is even');

export default () => {
  runGame(evenGameRound, task);
};
