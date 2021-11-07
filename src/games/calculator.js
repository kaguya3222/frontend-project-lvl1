import { randomCharacter, randomNumber } from '../random.js';
import processGameRound from './index.js';

const operationByCharacter = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const calculatorGameRound = () => {
  const firstNumber = randomNumber(0, 100);
  const secondNumber = randomNumber(0, 100);

  const operationCharacter = generateRandomOperationCharacter();
  const operation = getOperationByCharacter(operationCharacter);

  console.log(`Question: ${firstNumber} ${operationCharacter} ${secondNumber}`);

  const answer = getAnswer();
  const expectedAnswer = operation(firstNumber, secondNumber);

  return getResult(
    answer,
    expectedAnswer,
    compareAnswers.bind(null, Number(answer), expectedAnswer),
  );
};

const calculator = () => {
  processGameRound(calculatorGameRound, 'What is the result of the expression?');
};

export default calculator;
