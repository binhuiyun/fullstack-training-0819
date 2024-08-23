/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;
  let strArr = str.toLowerCase().split("");
  let vowelSet = new Set(["a", "e", "i", "o", "u"]);

  strArr.forEach((char) => {
    if (vowelSet.has(char)) {
      count += 1;
    }
  });

  return count;
}

module.exports = countVowels;
