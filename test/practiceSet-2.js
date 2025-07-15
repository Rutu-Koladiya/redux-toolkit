// 1.  Write a function that adds a timestamp property to each object in an array.

const addTimestamp = (arr) => {
  arr.forEach((element) => {
    element["timestamp"] = Date.now();
  });
  return arr;

  //   for (let element of arr) {
  //     element["timestamp"] = Date.now();
  //   }
  //   return arr
};

const users = [{ id: 1 }, { id: 2 }];
console.log(addTimestamp(users));

// 2.  Write a function that removes a specific property from all objects in an array.

const removeProperty = (arr, propToRemove) => {
  arr.forEach((element) => {
    delete element[propToRemove];
  });
  return arr;
};

const data = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
];
console.log(removeProperty(data, "age"));

// 3.  Write a function using reduce that finds the maximum value in an array of numbers.

const findMax = (arr) => {
  let maxNum = -Infinity;

  for (let num of arr) {
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
};

const numbers = [10, 20, 5, 50, 30];
console.log(findMax(numbers));

// 4.  Write a function that splits an array into two groups: one with elements that satisfy a condition and another with those that don’t.

const splitByCondition = (arr, cond) => {
  let temp = [];
  let arr2 = [];
  const conditionSatisfy = arr.filter(cond);
  temp.push(conditionSatisfy);

  arr.forEach((num) => {
    if (!conditionSatisfy.includes(num)) {
      arr2.push(num);
    }
  });

  temp.push(arr2);

  return temp;
};
const numbersArr = [1, 2, 3, 4, 5, 6];
console.log(splitByCondition(numbersArr, (x) => x % 2 === 0));
// [[2, 4, 6], [1, 3, 5]]

// 5.  Write a function that transforms a nested array into a key-value object.

const arrayToObject = (arr) => {
  return Object.fromEntries(arr);
};

const entries = [
  ["name", "Alice"],
  ["age", 30],
  ["role", "admin"],
];
console.log(arrayToObject(entries));
