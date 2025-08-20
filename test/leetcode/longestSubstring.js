// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

// i think have to do like loop on every char and add it in array,map string or anything if like store p after that sore w after w is the repeating same th delte the sequence what's stored and add this w

const subString = (str) => {
  let set = new Set();
  let left = 0;
  let maxLenght = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    set.add(str[right]);
    maxLenght = Math.max(maxLenght, right - left + 1);
  }

  return maxLenght;
};

const substring = (str) => {
  const map = new Map();
  for (let char of str) {
    if (!map.has(char)) {
      map.set(char);
    }
    map.delete();
    map.set(char);
  }
  return map;
};

console.log(subString("pwwkew"));
console.log(subString("bbbb"));
console.log(subString("abcabcbb"));
