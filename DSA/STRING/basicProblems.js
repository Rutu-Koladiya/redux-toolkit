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
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
};

console.log(pr2("rutu"));

// Write a function to check if two strings are anagrams (e.g. "listen", "silent").
const isAnagram = (str1, str2) => {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("rutu", "tutu"));

// String Problems (Basic to Advanced)

// ### 2. Count Vowels and Consonants**

// Given a string, count the number of vowels (`a, e, i, o, u`) and consonants.
// Example: `"hello"` → vowels = 2, consonants = 3

const countVowelsCons = (str) => {
  const isVowels = "aeiou";

  let vowels = 0;
  let constant = 0;

  for (let char of str.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      isVowels.includes(char) ? vowels++ : constant++;
    }
  }

  return `vowels = ${vowels}, constnts = ${constant}`;
};

console.log(countVowelsCons("rutu"));

// 3. Remove Duplicates from a String**

// Remove repeated characters.
// Example: `"programming"` → `"progamin"`

// const removeDuplicates = (str) => [...new Set(str)].join("");

const removeDuplicates = (str) => {
  // const set = new Set(str)

  // return Array.from(set).join("")
  let result = "";
  for (let char of str) {
    if (!result.includes(char)) {
      result += char;
    }
  }
  return result;
};

console.log(removeDuplicates("rutu"));

// 4. Character Frequency Count

// 👉 Count occurrences of each character.
// Example: `"apple"` → `{ a: 1, p: 2, l: 1, e: 1 }`

const countOccu = (str) => {
  const obj = {};

  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }

  return obj;
};

console.log(countOccu("apple"));

// ### **5. Longest Word in a Sentence**

// 👉 Find the longest word.
// Example: `"I love JavaScript"` → `"JavaScript"`

const longestWord = (str) => {
  const arr = str.split(" ");
  let longest = "";
  for (let word of arr) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
};

console.log(longestWord("I love javascript"));

// ### **6. Check if a String is a Rotation of Another**

// 👉 `"abcde"` and `"deabc"` → true

const checkRotation = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  return (str2 + str2).includes(str1);
  // for (let i = 1; i <= str2.length; i++) {
  //   let rotate = str2.substring(i, str2.length) + str2.substring(0, i); // left
  //   // let rotate = str2.substring(str2.length - i, str2.length) + str2.substring(0, str2.length - i); // right
  //   if (str1.charAt(0) === rotate.charAt(0) && str1 === rotate) return true;
  // }

  // return false;
};

console.log(checkRotation("abcde", "deabc"));
console.log(checkRotation("rutu", "tuur"));

// 7. Reverse Each Word but Keep Order

// `"I love JS"` → `"I evol SJ"`

const reverseEachWord = (str) =>
  str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");

console.log(reverseEachWord("I love JS"));

// 8. Find All Substrings of a String

// `"abc"` → `"a", "b", "c", "ab", "bc", "abc"`

const allSubstring = (str) => {
  const arr = [];

  for (let i = 0; i <= str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      arr.push(str.substring(i, j));
    }
  }
  return arr;
};

console.log(allSubstring("abc"));

// 9. Find Longest Palindromic Substring ⭐ (medium level)

// `"babad"` → `"bab"` or `"aba"`

const longestSubString = (str) => {
  let max = "";
  let obj = {};
  for (let i = 0; i <= str.length; i++) {
    for (let j = i + 2; j <= str.length; j++) {
      let sub = str.substring(i, j);
      obj[sub] = sub.split("").reverse().join("") === sub;
    }
  }

  for (let sub in obj) {
    if (obj[sub] === true) {
      if (sub.length > max.length) {
        max = sub;
        if (sub.length === max.length) {
          max += " sub";
        }
      }
    }
  }
  return max;
};

console.log(longestSubString("babad"));

// 10. Check Palindrome Substrings Count
const longestSubStringCount = (str) => {
  let count = "";
  let obj = {};
  for (let i = 0; i <= str.length; i++) {
    for (let j = i + 2; j <= str.length; j++) {
      let sub = str.substring(i, j);
      obj[sub] = sub.split("").reverse().join("") === sub;
    }
  }

  for (let sub in obj) {
    if (obj[sub] === true) {
      count++;
    }
  }

  return count;
};

console.log(longestSubStringCount("babadad"));

// 11. String Compression (Run Length Encoding) //abcaab a3b2c1
const stringCompression = (str) => {
  let obj = {};
  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }

  return Object.entries(obj)
    .map(([char, count]) => char + count)
    .join("");
};

console.log(stringCompression("abcaab"));

// 12. Check if a String has All Unique Characters

// `"abcdef"` → true, `"hello"` → false
const uniqueString = (str) => {
  const set = new Set(str);
  return set.size === str.length;
};

console.log(uniqueString("abcdef"));
console.log(uniqueString("rutu"));
