import randomNumber from '../random.js';
import processGameRound from '../index.js';
import { getCorrectPredicateGameAnswer, getPredicateGameTask } from './predicate.js';

const isEven = (number) => number % 2 === 0;

const evenGameRound = () => {
  const number = randomNumber(0, 100);
  const expectedAnswer = getCorrectPredicateGameAnswer(isEven, number);
  const question = `${number}`;

  return [expectedAnswer, question];
};

const task = getPredicateGameTask('number is even');

export default () => {
  processGameRound(evenGameRound, task);
};
