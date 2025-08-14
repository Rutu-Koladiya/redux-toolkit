// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

const containsDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
};

const containDuplicate = (arr) => {
  const arrLength = arr.length;

  const set = new Set(arr);
  const setLength = set.size;

  return arrLength !== setLength;
};

const containDuplicates = (arr) => {
  const seen = new Set(); // Map()

  for (let num of arr) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num); //.set
  }
  return false;
};

console.log(containDuplicates([1, 2, 3, 1]));
console.log(containDuplicates([1, 2, 3, 4]));
console.log(containDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
