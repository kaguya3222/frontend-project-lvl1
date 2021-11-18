import { randomNumber } from '../random.js';
import { processGameRound } from '../index.js';

const getGcd = (a, b) => (b ? getGcd(b, a % b) : a);

const gcdGameRound = () => {
  const number1 = randomNumber(1, 100);
  const number2 = randomNumber(1, 100);

  const gcd = getGcd(number1, number2);

  console.log(`Question: ${number1} ${number2}`);

  return String(gcd);
};

const gcd = () => {
  processGameRound(gcdGameRound, 'Find the greatest common divisor of given numbers.');
};

export default gcd;
