import getRandomNumber from '../random.js';
import runGame from '../index.js';

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

const runPrimeGameRound = () => {
  const number = getRandomNumber(1, 200);

  return [isPrime(number) ? 'yes' : 'no', String(number)];
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  runGame(runPrimeGameRound, task);
};
