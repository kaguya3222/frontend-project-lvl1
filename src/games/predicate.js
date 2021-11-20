export const getCorrectPredicateGameAnswer = (predicate, number) => (predicate(number) ? 'yes' : 'no');

export const getPredicateGameTask = (statement) => `Answer "yes" if given ${statement}. Otherwise answer "no".`;
