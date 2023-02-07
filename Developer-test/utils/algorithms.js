//STANDARD ALGORITHM
const calculateAnagramsStd = (wordsIn) => {
  let words = [...wordsIn];

  const map = {};

  for (const word of words) {
    const sortedWord = word.split("").sort().join("");
    if (!map[sortedWord]) {
      map[sortedWord] = [];
    }

    map[sortedWord].push(word);
  }

  let result = Object.values(map);
  return result;
};

//Improved algorithm using prime number multiplication to calculate hash.
const PRIME = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73,
  79, 83, 89, 97, 101, 103, 107, 109, 113,
];

const letters = {};
for (let i = 97; i <= 122; i++) {
  letters[String.fromCharCode(i)] = i - 97;
}

const MAX_WORD_LENGTH = 8;

const calculateAnagramsImp = (wordsIn) => {
  let words = [...wordsIn];

  const map = {};

  for (const word of words) {
    if (word.length > MAX_WORD_LENGTH) {
      throw `Found word length > ${MAX_WORD_LENGTH} (${word})`;
    }
    let hash = 1;
    for (const char of word) {
      hash *= PRIME[letters[char]];
    }
    if (!map[hash]) {
      map[hash] = [];
    }

    map[hash].push(word);
  }
  return Object.values(map);
};


//Algorithm that counts each different char in a efficient way.
const calculateAnagramsCountHash = (wordsIn) => {
  let words = [...wordsIn];
  let map = {};

  for (const word of words) {
    const count = new Array(28).fill(0);
    for (const char of word) {
      count[letters[char]]++;
    }

    const hash = count.join("");
    if (!map[hash]) {
      map[hash] = [];
    }

    map[hash].push(word);
  }
  let result = Object.values(map);
  return result;
};


//Algorithm that mixes previous ones in order to leverage advantages of them.
const calculateAnagramsMix = (wordsIn) => {
  let words = [...wordsIn];
  const SIZE_MIX = [7, 15];

  const map = {};

  for (const word of words) {
    let count = new Array(28).fill(0);
    let hash = "";
    if (word.length <= SIZE_MIX[0]) {
      hash = 1;
      for (const char of word) {
        hash *= PRIME[letters[char]];
      }
    } else if (word.length > SIZE_MIX[0] && word.length <= SIZE_MIX[1]) {
      hash = word.split("").sort().join("");
    } else {
      for (const char of word) {
        count[letters[char]]++;
      }
      hash = count.join("");
    }

    if (!map[hash]) {
      map[hash] = [];
    }

    map[hash].push(word);
  }

  let result = Object.values(map);
  return result;
};

module.exports = {
  calculateAnagramsStd,
  calculateAnagramsImp,
  calculateAnagramsCountHash,
  calculateAnagramsMix,
};
