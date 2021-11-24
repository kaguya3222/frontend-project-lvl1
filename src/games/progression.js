import getRandomNumber from '../random.js';
import runGame from '../index.js';

const progressionLength = 10;
const hiddenElementCharacter = '..';

const getQuestion = (difference, first, missingIndex) => {
  const getQuestionProgression = (acc, index) => {
    if (acc.length === progressionLength) {
      if (missingIndex === index) {
        return [...acc.slice(0, -1), hiddenElementCharacter];
      }

      return acc;
    }

    const currentElement = acc[index];
    const nextElement = currentElement + difference;
    const nextIndex = index + 1;

    if (index === missingIndex) {
      return getQuestionProgression(
        [...acc.slice(0, -1), hiddenElementCharacter, nextElement],
        nextIndex,
      );
    }

    return getQuestionProgression([...acc, nextElement], nextIndex);
  };

  const progression = getQuestionProgression([first], 0);

  return progression.join(' ');
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
