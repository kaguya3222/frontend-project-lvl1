export const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const randomCharacter = (alphabet) => alphabet[Math.floor(Math.random() * alphabet.length)];
