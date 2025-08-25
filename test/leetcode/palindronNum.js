// Given an integer x, return true if x is a

// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

const palindrome = (num) => {
  return String(num) === String(num).split("").reverse().join("");
};

const palindromeRecursion = (num) => {
  let string = num.toString();
  return isPalindrome(string, 0, string.length - 1);
  function isPalindrome(str, start, end) {
    if (start >= end) return true;
    if (str[start] !== str[end]) return false;
    return isPalindrome(str, start + 1, end - 1);
  }
};

console.log(palindromeRecursion(121));
console.log(palindromeRecursion(-121));
console.log(palindromeRecursion(10));
