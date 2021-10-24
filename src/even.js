import readlineSync from 'readline-sync';
import random from './random.js';

const isEven = (number) => number % 2 === 0;

const roundQuantity = 3;

export default () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < roundQuantity; i += 1) {
    const randomNumber = random(0, 100);

    console.log(`Question: ${randomNumber}`);

    const answer = readlineSync.question('Your answer: ');
    const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (answer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}"`);
      break;
    }
  }
};
