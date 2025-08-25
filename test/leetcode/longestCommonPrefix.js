// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

// const longestCommonPrefix = (strs) => {
//   if (!strs.length) return "";

//   let prefix = "";

//   for (let i = 0; i < strs[0].length; i++) {
//     let char = strs[0][i];

//     for (let j = 1; j < strs.length; j++) {
//       if (i >= strs[j].length || strs[j][i] !== char) {
//         return prefix; // mismatch found
//       }
//     }

//     prefix += char; // all matched at this index
//   }

//   return prefix;
// };

const longestCommonPrefix = (arr) => {
  if (!arr.length) return "";

  let prefix = "";
  for (let i = 0; i < arr[0].length; i++) {
    let char = arr[0][i];

    for (let j = 1; j < arr.length; j++) {
      if (i > arr[j].length || char !== arr[j][i]) return prefix;
    }
    prefix += char;
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["car", "racecar", "car"]));

const longestCommonPostfix = (arr) => {
  if (!arr.length) return "";

  const newArr = arr.map((a) => a.split("").reverse().join(""));

  let postfix = "";

  for (let i = 0; i < newArr[0].length; i++) {
    let char = newArr[0][i];

    for (let j = 1; j < newArr.length; j++) {
      if (i > newArr[j].length || char !== newArr[j][i]) return postfix;
    }

    postfix += char;
  }
  return postfix;
};

console.log(longestCommonPostfix(["flower", "racecar", "car"]));
