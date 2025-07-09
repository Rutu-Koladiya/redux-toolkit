// 2. Problem: Nested Sum of an Arbitrary Depth Array

// Write a function nestedSum(arr) that takes an array containing numbers or other arrays (which can themselves be nested to any level) and returns the sum of all numbers.

// Example:

// nestedSum([1, 2, [3, 4], [5, [6]], 7]) // Output: 28
// nestedSum([[[[1]]], 2, [3, [4, [5]]]]) // Output: 15
// nestedSum([]) // Output: 0

const NestedSumArray = () => {
  const nestedSum = (arr) => {
    let sum = 0;

    for (let element of arr) {
      if (Array.isArray(element)) {
        sum += nestedSum(element);
      } else if (typeof element === "number") {
        sum += element;
      }
    }

    return sum;
  };
  console.log(nestedSum([1, 2, [3, 4], [5, [6]], 7]));
  console.log(nestedSum([[[[1]]], 2, [3, [4, [5]]]]));
  console.log(nestedSum([]));
};

export default NestedSumArray;
