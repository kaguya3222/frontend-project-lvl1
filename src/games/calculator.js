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

  console.log(`Question: ${firstNumber} ${operationCharacter} ${secondNumber}`);
  return String(operation(firstNumber, secondNumber));
};

export default () => {
  processGameRound(calculatorGameRound, 'What is the result of the expression?');
};
