// Reverse a String

const reverseStr = (str) => {
  // return str.split("").reverse().join("")
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};

console.log(reverseStr("rutu"));

// Check if a String is Palindrome
const isPalindrome = (str) => {
  // return str === str.split("").reverse().join("")

  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    if (str[l] !== str[r]) return false;

    l++, r--;
  }
  return true;
};

console.log(isPalindrome("rutu"));
console.log(isPalindrome("rar"));

// Count Occurrences of Each Character

const countOccurrences = (str) => {
  let obj = {};

  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }
  return obj;
};

console.log(countOccurrences("rutu"));

// YOUR TURN
// Write a function to reverse only words in a sentence → "I love JS" → "JS love I".
const pr1 = (str) => {
  // return str.split(" ").reverse().join(" ")

  const arr = str.split(" ");
  let newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr.join(" ");
};
console.log(pr1("I love JS"));

// Write a function to find the first non-repeating character in a string.
const pr2 = (str) => {
  let result;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    for (let j = 1; j < str.length; j++) {
      if (char !== str[j]) {
        result = char;
      }
    }
  }
  return result;
};

console.log(pr2("rutu"));

// Write a function to check if two strings are anagrams (e.g. "listen", "silent").
