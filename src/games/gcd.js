import getRandomNumber from '../random.js';
import runGame from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => (b ? getGcd(b, a % b) : a);

const runGcdGameRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const gcd = getGcd(number1, number2);

  const expectedAnswer = String(gcd);
  const question = `${number1} ${number2}`;

  return [expectedAnswer, question];
};

export default () => {
  runGame(runGcdGameRound, task);
};
