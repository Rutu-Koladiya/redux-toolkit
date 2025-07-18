// 1. Write a function that filters out users who are inactive (isActive: false).

const getActiveUsers = (arr) => {
  return arr.filter((a) => a.isActive);
};

const users = [
  { id: 1, name: "Alice", isActive: true },
  { id: 2, name: "Bob", isActive: false },
  { id: 3, name: "Charlie", isActive: true },
];
console.log(getActiveUsers(users));

// 2. Write a function that counts how many times each item appears in an array.

const countOccurrences = (arr) => {
  let result = {};

  for (let fruit of arr) {
    if (!result[fruit]) {
      result[fruit] = 1;
    } else {
      result[fruit] += 1;
    }
  }
  return result;
};

const items = ["apple", "banana", "apple", "cherry", "banana", "apple"];
console.log(countOccurrences(items));

// 3. Write a function that flattens a nested array one level deep.

const flattenOnce = (arr) => {
  const flatenArr = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flatenArr.push(...element);
    } else {
      flatenArr.push(element);
    }
  });
  return flatenArr;
};
const nested = [1, [2, 3], [4, 5], 6];
console.log(flattenOnce(nested));

// 4. Write a function that returns a list of unique values from an array.

const getUnique = (arr) => {
  return new Set(arr);
};

const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(getUnique(numbers));

// 5. Write a function that capitalizes the first letter of each word in a sentence.

const capitalizeWords = (str) => {
  return str
    .split(" ")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(" ");
};

const sentence = "hello world from javascript";
console.log(capitalizeWords(sentence));

// 6. group by length

const groupByLength = (arr) => {
  return arr.reduce((acc, a) => {
    const length = a.length;

    if (!acc[length]) {
      acc[length] = [];
    }

    acc[length].push(a);

    return acc;
  }, {});
};

const arr = ["apple", "orange", "banana"];

console.log(groupByLength(arr));

// 6. Write a function that merges two arrays of objects by id. If ids match, combine the properties.

const mergeById = (arr1, arr2) => {
  let arr = [...arr1, ...arr2];

  const mereged = arr.reduce((acc, a) => {
    let { id, ...rest } = a;

    if (!acc[id]) {
      acc[id] = { id, ...rest };
    }

    acc[id] = { ...acc[id], ...rest };

    return acc;
  }, {});

  return Object.values(mereged);
};

const arr1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const arr2 = [
  { id: 1, age: 25 },
  { id: 2, age: 30 },
];
console.log(mergeById(arr1, arr2));

// 7. Write a function that finds the common elements between two arrays.

const findCommonEle = (arr1, arr2) => {
  // const mereged = [...arr1, ...arr2];
  // const arr = [];
  // const result = [];

  // mereged.forEach((a) => {
  //   if (arr.includes(a)) {
  //     result.push(a);
  //   } else if (!arr.includes(a)) {
  //     arr.push(a);
  //   }
  // });
  // return result;

  // efficient solution:
  const result = [];
  const seen1 = new Set(arr1);

  arr2.forEach((a) => {
    if (seen1.has(a) && !result.includes(a)) {
      result.push(a);
    }
  });
  return result;
};

console.log(findCommonEle([1, 2, 3, 4], [3, 4, 5, 6]));

// An array with the common elements between the two arrays (e.g., [3, 4])

// 1. Find the Most Frequent Element in an Array

// Write a function that returns the most frequent element in an array.

const mostFrequent = (arr) => {
  let obj = {};
  let maxCount = 0;
  let mostFrequentElement;
  arr.forEach((a) => {
    if (!obj[a]) {
      obj[a] = 1;
    } else {
      obj[a] += 1;
    }

    if (obj[a] > maxCount) {
      maxCount = obj[a];
      mostFrequentElement = a;
    }
  });

  return mostFrequentElement;
};

const number = [1, 3, 3, 3, 2, 2, 2, 4];
console.log(mostFrequent(number));

// 2. Flatten a Nested Array

// Write a function that flattens a nested array of arbitrary depth into a single array.

const flattenArray = (arr) => {
  const result = [];

  const flateArr = (arr) => {
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        flateArr(element);
      } else {
        result.push(element);
      }
    });
  };
  flateArr(arr);
  return result;
};

const nestedArray = [1, [2, [3, 4]], 5];
console.log(flattenArray(nestedArray));

// 3. Count the Occurrences of a Specific Element in an Array
// Write a function that counts the occurrences of a specific element in an array.

const countElementOccurrences = (arr, color) => {
  let occurance = 0;
  arr.forEach((a) => {
    if (a.includes(color)) {
      occurance += 1;
    }
  });

  return occurance;
};

const colors = ["red", "blue", "red", "green", "blue"];
console.log(countElementOccurrences(colors, "green"));

// 4.Reverse an Array

// Write a function that reverses an array without using the built-in `reverse()` method.

const reverseArray = (arr) => {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
};

const num = [1, 2, 3, 4];
console.log(reverseArray(num));

// 5. Find the Missing Number in an Array

// Given an array of numbers from 1 to N (inclusive), with one number missing, write a function to find the missing number.

const findMissingNumber = (arr) => {
  const length = arr.length + 1;
  const acceptedSum = (length * (length + 1)) / 2;
  const sum = arr.reduce((acc, num) => num + acc, 0);

  return acceptedSum - sum;
};

const numb = [1, 2, 4, 5, 6];
console.log(findMissingNumber(numb));

// 2. Find the Index of the First Occurrence of an Element

// Write a function that returns the index of the first occurrence of a given element in an array.

const findFirstIndex = (arr, num) => {
  return arr.indexOf(num);
};

const arrOfNum = [1, 2, 3, 4, 5, 3];
console.log(findFirstIndex(arrOfNum, 3));

// 4. Sum the Values of Objects in an Array Based on a Property

// Write a function that sums the values of a specific property from an array of objects.

const sumPrices = (arr) => {
  return arr.reduce((acc, element) => acc + element.price, 0);
};

const item = [
  { name: "item1", price: 10 },
  { name: "item2", price: 20 },
  { name: "item3", price: 30 },
];

console.log(sumPrices(item));

console.log("--------------------EXTRA--------------------");

// Q1-Style: Brackets with a Constraint
// Balanced Curly Brackets With Distance Constraint

// You're given a string containing curly brackets {}. Determine if every { has a matching } within the next 3 characters (inclusive).

//     Return "YES" if all { have a matching } within 3 positions.

//     Otherwise, return "NO".

// Example:

// Input: "a{b}cd"
// Output: "YES"

// Input: "a{bcde}"
// Output: "NO"

const haveMatching = (string) => {
  const str = string.split("");
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "{") {
      stack.push(i);
    }

    if (str[i] === "}") {
      if (stack.length === 0) {
        return "NO";
      }

      const openPos = stack.pop();

      if (i - openPos > 3) {
        return "NO";
      }
    }
  }
  if (stack.length > 0) {
    return "NO"; // There are unmatched opening brackets
  }

  return "YES";
};

const input1 = "a{b}cd";

console.log(haveMatching(input1));

const flattedObject = (obj, parentKey = "", result = {}) => {
  for (let key in obj) {
    console.log(key, "key");

    console.log(obj[key], "obj key");

    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (
      typeof obj[key] === "object" &&
      (obj[key] !== null) & !Array.isArray(obj[key])
    ) {
      flattedObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
};

const input = { a: { b: { c: { d: 5 } }, e: 2 }, f: 3 };
const input2 = { foo: 1, bar: 2 };

console.log(flattedObject(input));
console.log(flattedObject(input2));

// function findDeepestPath(obj) {
//   let maxDepth = -1;
//   let deepestPath = "";

//   function dfs(currentObj, currentPath, depth) {
//     if (typeof currentObj !== "object" || currentObj === null) {
//       // Base case: If it's not an object, return
//       if (depth > maxDepth) {
//         maxDepth = depth;
//         deepestPath = currentPath;
//       }
//       return;
//     }

//     for (let key in currentObj) {
//       dfs(currentObj[key], currentPath + "." + key, depth + 1);
//     }
//   }

//   // Start DFS
//   dfs(obj, "", 0);
//   return deepestPath.slice(1); // Remove the leading dot
// }

const findDeepestPath = (obj) => {
  let maxDepth = -1;
  let deepestPath = "";

  function dfs(curObj, currentPath, depth) {
    if (typeof curObj !== "object" || curObj === null) {
      if (maxDepth < depth) {
        maxDepth = depth;
        deepestPath = currentPath;
      }
    }
    for (let key in curObj) {
      dfs(curObj[key], currentPath + "." + key, depth + 1);
    }
  }

  dfs(obj, "", 0);
  return deepestPath.slice(1);
};

const obj1 = { a: { b: { c: { d: 5 } } } };
console.log(findDeepestPath(obj1));

const obj2 = { foo: 1, bar: 2 };
console.log(findDeepestPath(obj2));


