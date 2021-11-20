export const getPredicateGameRoundResult = (predicate, number) => [(predicate(number) ? 'yes' : 'no'), String(number)];

export const getPredicateGameTask = (statement) => `Answer "yes" if given ${statement}. Otherwise answer "no".`;
