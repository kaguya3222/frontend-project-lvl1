import readlineSync from 'readline-sync';

const roundQuantity = 3;

export default (generateRound, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);

  for (let i = 0; i < roundQuantity; i += 1) {
    const [expectedAnswer, question] = generateRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    const result = answer === expectedAnswer;

    if (!result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct');
  }
  console.log(`Congratulations, ${name}!`);
};
