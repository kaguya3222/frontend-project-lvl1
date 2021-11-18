export const getCorrectPredicateGameAnswer = (predicate, number) => {
  console.log(`Question: ${number}`);

  return predicate(number) ? 'yes' : 'no';
};

export const predicateGameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
