import getRandomNumber from '../random.js';
import runGame from '../index.js';

const task = 'What is the result of the expression?';

const operationByCharacter = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const generateCalculatorRound = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const operationCharacters = Object.keys(operationByCharacter);
  const randomOperationIndex = getRandomNumber(0, operationCharacters.length - 1);
  const operationCharacter = operationCharacters[randomOperationIndex];
  const operation = operationByCharacter[operationCharacter];
  const expectedAnswer = String(operation(firstNumber, secondNumber));
  const question = `${firstNumber} ${operationCharacter} ${secondNumber}`;

  return [expectedAnswer, question];
};

export default () => {
  runGame(generateCalculatorRound, task);
};
