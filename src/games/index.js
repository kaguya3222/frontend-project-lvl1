import readlineSync from 'readline-sync';

const roundQuantity = 3;

export const getCorrectPredicateGameAnswer = (predicate, number) => {
  console.log(`Question: ${number}`);

  return predicate(number) ? 'yes' : 'no';
};

export const predicateGameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const processGameRound = (round, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);

  for (let i = 0; i < roundQuantity; i += 1) {
    const expectedAnswer = round();
    const answer = readlineSync.question('Your answer: ');

    const result = answer === expectedAnswer;

    if (!result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'`);
      return;
    }
    console.log('Correct');
  }
  console.log(`Congratulations, ${name}!`);
};
