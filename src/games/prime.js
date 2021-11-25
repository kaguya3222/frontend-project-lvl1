import getRandomNumber from '../random.js';
import runGame from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const generatePrimeGameRound = () => {
  const number = getRandomNumber(1, 200);
  const expectedAnswer = isPrime(number) ? 'yes' : 'no';
  const question = String(number);

  return [expectedAnswer, question];
};

export default () => {
  runGame(generatePrimeGameRound, task);
};
