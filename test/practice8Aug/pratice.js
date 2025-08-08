// Q1) Majority Element
// You are given an array of integers. A majority element is the element that appears more than n/2 times in the array (where n is the array’s length).
// Write a function to return the majority element. If there’s no majority element, return null.

const majorityElement = (arr) => {
  const arrLength = arr.length;

  const obj = {};

  arr.forEach((element) => {
    if (!obj[element]) {
      obj[element] = 1;
    } else {
      obj[element] += 1;
    }
  });

  for (const key in obj) {
    if (obj[key] > arrLength / 2) {
      return Number(key);
    }
  }
  return null;
};

console.log(majorityElement([3, 3, 4, 2, 3, 3, 5])); // → 3
console.log(majorityElement([1, 2, 3])); // → null

// You’re given:

// A string containing only (, ), {, }, [ , ].

// An integer k representing minimum distance.

// The string is valid if:

// All brackets are balanced (normal rule).

// For every matching pair, the distance between their indices in the string is at least k.

// Distance = closingIndex - openingIndex

// Return true if valid, false otherwise.

const isValidWithDistance = (arr, k) => {
  let tempArr = [];
  let hasPairWithK = false;

  const openingBrackets = ["(", "{", "["];
  const closingBrackets = [")", "}", "]"];

  for (let i = 0; i < arr.length; i++) {
    if (openingBrackets.includes(arr[i])) {
      tempArr.push({ char: arr[i], index: i });
    }

    if (closingBrackets.includes(arr[i])) {
      const opening = tempArr.pop();

      if (!opening) return false;
      if (
        openingBrackets.indexOf(opening?.char) !==
        closingBrackets.indexOf(arr[i])
      )
        return false;

      if (i - opening.index >= k) {
        hasPairWithK = true;
      }
    }
  }
  if (tempArr.length) {
    return false;
  }
  return hasPairWithK;
};

console.log(isValidWithDistance("( )", 2)); // true
// console.log(isValidWithDistance("()", 2)); //false   // distance = 1 < k
// console.log(isValidWithDistance("{ [ ] }", 3)); // true
// console.log(isValidWithDistance("{ [ ] }", 7)); // false

const maxDistance = (arr) => {
  let tempArr = [];
  let maxDis = 0;

  const openingBrackets = ["(", "{", "["];
  const closingBrackets = [")", "}", "]"];

  // arr.forEach((element, index) => {
  //   if (openingBrackets.includes(element)) {
  //     tempArr.push({ char: element, index});
  //   }
  // });

  for (let i = 0; i < arr.length; i++) {
    if (openingBrackets.includes(arr[i])) {
      tempArr.push({ char: arr[i], index: i });
    }

    if (closingBrackets.includes(arr[i])) {
      const opening = tempArr.pop();

      if (!opening) return -1;

      if (
        openingBrackets.indexOf(opening.char) !==
        closingBrackets.indexOf(arr[i])
      ) {
        return -1;
      }
      const dis = i - opening.index;
      if (dis > maxDis) maxDis = dis;
    }
  }
  if (tempArr.length) return -1;

  return maxDis;
};

// console.log(maxDistance("{ [ ] }"));
// console.log(maxDistance(["{", "[", "]", "}"])); // 3
// console.log(maxDistance(["(", "[", ")", "]"])); // -1 (invalid)
// console.log(maxDistance(["[", "(", "{", "}", ")", "]"])); // 5

// Problem:
// You are given an array of integers.
// Find the length of the longest consecutive sequence (numbers appearing one after another in increasing order) without reordering the array.

// Input: [100, 4, 200, 1, 3, 2]
// Output: 4  // (sequence: 1, 2, 3, 4)

// Input: [10, 9, 8, 7]
// Output: 4  // (sequence: 7, 8, 9, 10)

// const longSequence = (arr) => {
//   const sequeneArr = [];
//   let minNum = Math.min(...arr);
//   sequeneArr.push(minNum);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] === minNum + 1) {
//         sequeneArr.push(arr[j]);
//         minNum = arr[j];
//       }
//     }
//   }
//   return sequeneArr.length;
// };

const longSequence = (arr) => {
  const set = new Set(arr);
  let maxLen = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let len = 1;

      while (set.has(current + 1)) {
        current++;
        len++;
      }

      maxLen = Math.max(maxLen, len);
    }
  }
  return maxLen;
};

console.log(longSequence([10, 9, 8, 7]));
console.log(longSequence([100, 4, 200, 1, 3, 2]));
