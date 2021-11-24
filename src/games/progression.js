import getRandomNumber from '../random.js';
import runGame from '../index.js';

const progressionLength = 10;

const getQuestion = (difference, first, missingIndex) => {
  const iter = (acc, index) => {
    if (acc.split(' ').length === progressionLength) return acc;

    const nextIndex = index + 1;

    if (index === missingIndex) return iter(`${acc} ..`, nextIndex);

    const nextElement = first + difference * index;
    const nextAcc = `${acc} ${nextElement}`.trim();

    return iter(nextAcc, nextIndex);
  };

  return iter('', 0);
};

const runProgressionGameRound = () => {
  const difference = getRandomNumber(1, 10);
  const first = getRandomNumber(0, 100);
  const missingIndex = getRandomNumber(0, progressionLength - 1);
  const question = getQuestion(difference, first, missingIndex);
  const expectedAnswer = String(first + difference * missingIndex);

  return [expectedAnswer, question];
};

const task = 'What number is missing in the progression?';

export default () => {
  runGame(runProgressionGameRound, task);
};
