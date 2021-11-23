import getRandomNumber from '../random.js';
import runGame from '../index.js';

const operationByCharacter = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const runCalculatorGameRound = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);

  const operationCharacters = Object.keys(operationByCharacter);

  const operationCharacter = operationCharacters[
    getRandomNumber(0, operationCharacters.length - 1)
  ];

  const operation = operationByCharacter[operationCharacter];

  const expectedAnswer = String(operation(firstNumber, secondNumber));
  const question = `${firstNumber} ${operationCharacter} ${secondNumber}`;

  return [expectedAnswer, question];
};

const task = 'What is the result of the expression?';

export default () => {
  runGame(runCalculatorGameRound, task);
};
