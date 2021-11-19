export const getCorrectPredicateGameAnswer = (predicate, number) => {
  console.log(`Question: ${number}`);

  return predicate(number) ? 'yes' : 'no';
};

export const getPredicateGameTask = (statement) => `Answer "yes" if given ${statement}. Otherwise answer "no".`;
