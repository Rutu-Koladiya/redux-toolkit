// Q2) Majority Element

// Given an array of integers, find the majority element, i.e., the element that appears more than half the length of the array (n / 2 times). If no such element exists, return -1.

// Example:

// Input: [1,1,2,1,3]
// Output: 1

// Input: [1,2,3]
// Output: -1

const findMajorityElement = (arr) => {
  let length = arr.length;

  let obj = {};

  arr.forEach((element) => {
    if (!obj[element]) {
      obj[element] = 1;
    } else {
      obj[element] += 1;
    }
  });
  for (let key in obj) {
    if (obj[key] > length / 2) {
      return Number(key);
    }
  }

  return -1;
};

const input1 = [1, 1, 2, 1, 3];
const input2 = [1,2,3]

console.log(findMajorityElement(input1));
console.log(findMajorityElement(input2));