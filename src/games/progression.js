import randomNumber from '../random.js';
import processGameRound from '../index.js';

const progressionLength = 10;

const generateProgression = (difference, first, length) => {
  const iter = (acc) => {
    if (acc.length === length) return acc;

    return iter([...acc, acc[acc.length - 1] + difference]);
  };

  return iter([first]);
};

const progressionGameRound = () => {
  const difference = randomNumber(1, 10);
  const first = randomNumber(0, 100);
  const progression = generateProgression(difference, first, progressionLength);
  const hiddenIndex = randomNumber(0, progressionLength - 1);
  const progressionWithHiddenElement = progression.map((el, index) => (index === hiddenIndex ? '..' : el));
  const hiddenElement = progression[hiddenIndex];

  console.log(`Question: ${progressionWithHiddenElement.join(' ')}`);

  return String(hiddenElement);
};

const progression = () => {
  processGameRound(progressionGameRound, 'What number is missing in the progression?');
};

export default progression;
