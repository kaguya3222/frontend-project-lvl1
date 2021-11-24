import getRandomNumber from '../random.js';
import runGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const runEvenGameRound = () => {
  const number = getRandomNumber(0, 100);

  return [isEven(number) ? 'yes' : 'no', String(number)];
};

const task = 'Answer "yes" if given number is even. Otherwise answer "no".';

export default () => {
  runGame(runEvenGameRound, task);
};
