import { randomNumber } from '../random.js';
import { processGameRound, getCorrectPredicateGameAnswer, predicateGameTask } from './index.js';

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

  console.log(`Question: ${number}`);

  return getCorrectPredicateGameAnswer(isPrime.bind(null, number));
};

const prime = () => {
  processGameRound(primeGameRound, predicateGameTask);
};

export default prime;
