import readlineSync from 'readline-sync';

const roundQuantity = 3;

export const greetings = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
};

export const getAnswer = () => readlineSync.question('Your answer: ');

export const compareAnswers = (current, expected) => current === expected;

export const getResult = (current, expected, compare) => {
  if (compare()) {
    console.log('Correct!');

    return true;
  }

  console.log(`'${current}' is wrong answer ;(. Correct answer was '${expected}'`);

  return false;
};

export const processGameRound = (round) => {
  for (let i = 0; i < roundQuantity; i += 1) {
    const result = round();

    if (!result) break;
  }
};
