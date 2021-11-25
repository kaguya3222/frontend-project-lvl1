import getRandomNumber from '../random.js';
import runGame from '../index.js';

const task = 'What number is missing in the progression?';

const progressionLength = 10;

const getQuestion = (difference, first, missingIndex) => {
  const generateProgression = (acc, index) => {
    if (acc.length === progressionLength) return acc;

    const nextIndex = index + 1;

    if (index === missingIndex) return generateProgression([...acc, '..'], nextIndex);

    const nextElement = first + difference * index;

    return generateProgression([...acc, nextElement], nextIndex);
  };

  const progression = generateProgression([], 0);

  return progression.join(' ');
};

const generateProgressionGameRound = () => {
  const difference = getRandomNumber(1, 10);
  const first = getRandomNumber(0, 100);
  const missingIndex = getRandomNumber(0, progressionLength - 1);
  const question = getQuestion(difference, first, missingIndex);
  const expectedAnswer = String(first + difference * missingIndex);

  return [expectedAnswer, question];
};

export default () => {
  runGame(generateProgressionGameRound, task);
};
