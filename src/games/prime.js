import randomNumber from '../random.js';
import processGameRound from '../index.js';
import { getPredicateGameRoundResult, getPredicateGameTask } from './predicate.js';

const isPrime = (n) => {
  const smallestPrimeNumber = 2;

  if (n < smallestPrimeNumber) return false;

  const iter = (acc) => {
    if (acc === n) return true;

    if (n % acc === 0) return false;

    return iter(acc + 1);
  };

  return iter(smallestPrimeNumber);
};

const primeGameRound = () => {
  const number = randomNumber(1, 200);

  return getPredicateGameRoundResult(isPrime, number);
};

const task = getPredicateGameTask('number is prime');

export default () => {
  processGameRound(primeGameRound, task);
};
