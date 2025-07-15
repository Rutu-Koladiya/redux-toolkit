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
// { apple: 3, banana: 2, cherry: 1 }

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
// [1, 2, 3, 4, 5, 6]

// 4. Write a function that returns a list of unique values from an array.

const getUnique = (arr) => {
  return new Set(arr);
};

const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(getUnique(numbers));
// [1, 2, 3, 4, 5]

// 5. Write a function that capitalizes the first letter of each word in a sentence.

const capitalizeWords = (str) => {
  return str
    .split(" ")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(" ");
};

const sentence = "hello world from javascript";
console.log(capitalizeWords(sentence));
// "Hello World From Javascript"

// 6. Write a function that merges two arrays of objects by id. If ids match, combine the properties.

const mergeById = (arr1, arr2) => {
  let arr = [...arr1, ...arr2];

  arr.reduce((acc, a) => {
    let { id, ...rest } = a;

    if (!acc[id]) {
      acc[id] = [...acc[id], ...rest];
    }

    acc[id] = { ...acc[id], ...rest };

    return acc;
  }, {});
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
// [{ id: 1, name: "Alice", age: 25 }, { id: 2, name: "Bob", age: 30 }]
