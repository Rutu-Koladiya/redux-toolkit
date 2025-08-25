// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

// Both strings must have exactly the same letters

// And each letter must appear the same number of times

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

// step:1 -> create map from s
// step:2 -> check for every letter of t in map that it's exists if not return false

// const isValid = (s,t) => {
//     const arr1 = s.split("")
//     console.log(arr1);

//     const newS = new Map(arr1)
//     console.log(newS);

// }

const isValid = (s, t) => {
  const s1 = s.split("").sort().join();
  const t2 = t.split("").sort().join();

  return s1 === t2;
};

const isValids = (s, t) => {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!map.has(char) || map.get(char) === 0) return false;

    map.set(char, map.get(char) - 1);
  }

  return true;
};

console.log(isValids("anagram", "nagaram"));
console.log(isValids("rat", "car"));
console.log(isValids("rutu", "turu"));
