import { randomCharacter, randomNumber } from '../random.js';
import {
  compareAnswers,
  getAnswer, getResult, greetings, processGameRound,
} from './index.js';

const operationCharacters = {
  multiply: '*',
  sum: '+',
  diff: '-',
};

const sum = (x, y) => x + y;
const diff = (x, y) => x - y;
const multiply = (x, y) => x * y;

const generateRandomOperationCharacter = () => randomCharacter(Object.values(operationCharacters));

const getOperationByCharacter = (character) => ({
  [operationCharacters.sum]: sum,
  [operationCharacters.diff]: diff,
  [operationCharacters.multiply]: multiply,
}[character]);

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
  greetings();

  console.log('What is the result of the expression?');

  processGameRound(calculatorGameRound);
};

export default calculator;
