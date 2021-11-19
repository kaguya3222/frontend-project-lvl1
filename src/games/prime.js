import randomNumber from '../random.js';
import processGameRound from '../index.js';
import { getCorrectPredicateGameAnswer, predicateGameTask } from './predicate.js';

const isPrime = (n) => {
  const rangeStart = 2;

  if (n < rangeStart) return false;

  const iter = (acc) => {
    if (acc === n) return true;

    if (n % acc === 0) return false;

    return iter(acc + 1);
  };

  return iter(rangeStart);
};

const primeGameRound = () => {
  const number = randomNumber(1, 200);

  return getCorrectPredicateGameAnswer(isPrime, number);
};

export default () => {
  processGameRound(primeGameRound, predicateGameTask);
};
