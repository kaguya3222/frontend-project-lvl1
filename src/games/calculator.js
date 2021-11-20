import randomNumber from '../random.js';
import processGameRound from '../index.js';

const operationByCharacter = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const calculatorGameRound = () => {
  const firstNumber = randomNumber(0, 100);
  const secondNumber = randomNumber(0, 100);

  const operationCharacters = Object.keys(operationByCharacter);

  const operationCharacter = operationCharacters[randomNumber(0, operationCharacters.length - 1)];

  const operation = operationByCharacter[operationCharacter];

  const expectedAnswer = String(operation(firstNumber, secondNumber));
  const question = `${firstNumber} ${operationCharacter} ${secondNumber}`;

  return [expectedAnswer, question];
};

const task = 'What is the result of the expression?';

export default () => {
  processGameRound(calculatorGameRound, task);
};
