const {
  calculateAnagramsStd,
  calculateAnagramsImp,
  calculateAnagramsCountHash,
  calculateAnagramsMix,
} = require("../algorithms");

const assert = require("assert");

describe("calculateAnagramsStd", function () {
  it("should return an array of arrays of words that are anagrams of each other", function () {
    const result = calculateAnagramsStd(["eat", "tea", "ate", "pear", "rape"]);
    assert.deepEqual(result, [
      ["eat", "tea", "ate"],
      ["pear", "rape"],
    ]);
  });

  it("should return an empty array if the input is empty", function () {
    const result = calculateAnagramsStd([]);
    assert.deepEqual(result, []);
  });

  it("should return an array with the original word if there is only one word in the input", function () {
    const result = calculateAnagramsStd(["pear"]);
    assert.deepEqual(result, [["pear"]]);
  });
});

describe("calculateAnagramsImp", () => {
  it("should return correct anagram groups", () => {
    const words = ["cat", "dog", "act", "god"];
    const result = calculateAnagramsMix(words);
    assert.deepEqual(result, [
      ["cat", "act"],
      ["dog", "god"],
    ]);
  });

  it("should return words as single anagram group when no anagrams are found", () => {
    const words = ["hello", "world"];
    const result = calculateAnagramsMix(words);
    assert.deepEqual(result, [["hello"], ["world"]]);
  });

  it("should return an array of arrays of words that are anagrams of each other", function () {
    const result = calculateAnagramsMix(["eat", "tea", "ate", "pear", "rape"]);
    assert.deepEqual(result, [
      ["eat", "tea", "ate"],
      ["pear", "rape"],
    ]);
  });

  it("should return an empty array if the input is empty", function () {
    const result = calculateAnagramsImp([]);
    assert.deepEqual(result, []);
  });

  it("should return an array with the original word if there is only one word in the input", function () {
    const result = calculateAnagramsImp(["pear"]);
    assert.deepEqual(result, [["pear"]]);
  });
  it("should return an array of anagrams grouped by hash value", () => {
    const words = ["eat", "tea", "ate", "hello", "olleh"];
    const result = calculateAnagramsImp(words);

    assert.deepEqual(result, [
      ["eat", "tea", "ate"],
      ["hello", "olleh"],
    ]);
  });

  it("should throw an error if a word length is greater than MAX_WORD_LENGTH", () => {
    const words = ["eat", "tea", "ate", "hello", "olleh", "toolongword"];

    assert.throws(() => {
      calculateAnagramsImp(words);
    }, /Found word length > 8 \(toolongword\)/);
  });
});

describe("calculateAnagramsCountHash", () => {
  it("should return correct anagram groups", () => {
    const words = ["cat", "dog", "act", "god"];
    const result = calculateAnagramsCountHash(words);
    assert.deepEqual(result, [
      ["cat", "act"],
      ["dog", "god"],
    ]);
  });

  it("should return words as single anagram group when no anagrams are found", () => {
    const words = ["hello", "world"];
    const result = calculateAnagramsCountHash(words);
    assert.deepEqual(result, [["hello"], ["world"]]);
  });

  it("should return an array of arrays of words that are anagrams of each other", function () {
    const result = calculateAnagramsCountHash([
      "eat",
      "tea",
      "ate",
      "pear",
      "rape",
    ]);
    assert.deepEqual(result, [
      ["eat", "tea", "ate"],
      ["pear", "rape"],
    ]);
  });

  it("should return an empty array if the input is empty", function () {
    const result = calculateAnagramsCountHash([]);
    assert.deepEqual(result, []);
  });

  it("should return an array with the original word if there is only one word in the input", function () {
    const result = calculateAnagramsCountHash(["pear"]);
    assert.deepEqual(result, [["pear"]]);
  });
});

describe("calculateAnagramsMix", function () {
  it("should return an array of arrays of anagrams", function () {
    const wordsIn = ["dog", "god", "cat", "act", "rat"];
    const result = calculateAnagramsMix(wordsIn);
    assert.deepEqual(result, [["cat", "act"], ["dog", "god"], ["rat"]]);
  });

  it("should handle words with different lengths", function () {
    const wordsIn = [
      "doga",
      "agod",
      "cat",
      "act",
      "ratabcdrty",
      "rrtyatabcd",
      "helloikjkllmdsend",
      "helllmdsenoikjkld",
    ];
    const result = calculateAnagramsMix(wordsIn);
    assert.deepEqual(result, [
      ["cat", "act"],
      ["doga", "agod"],
      ["ratabcdrty", "rrtyatabcd"],
      ["helloikjkllmdsend", "helllmdsenoikjkld"],
    ]);
  });
});
