// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

const validParentheses = (s) => {
  const stack = [];
  const map = { ")": "(", "]": "[", "}": "{" };

  for (let char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) return false;
    }
  }
  return stack.length === 0;
};

console.log(validParentheses("()[]{}")); // true
console.log(validParentheses("(]")); // false
console.log(validParentheses("()"));
console.log(validParentheses("([])"));
console.log(validParentheses("([)]"));

// # 📝 Problem-Solving Cheat Sheet (Patterns → DS/Method)

// ## 🔡 Strings

// | Problem Pattern                   | Best DS / Method                         | Why                                             |
// | --------------------------------- | ---------------------------------------- | ----------------------------------------------- |
// | Find longest common prefix/suffix | Index-based iteration (loop chars)       | Order matters, Map/Set doesn’t keep sequence    |
// | Check if string is palindrome     | Two pointers (`left`, `right`)           | Efficient O(n), no extra space                  |
// | Count frequency of characters     | `Map` or plain object `{}`               | Key = char, Value = count                       |
// | Find first unique character       | `Map` with counts → iterate string again | Need order + frequency                          |
// | Check anagram (two strings)       | Sort both strings OR `Map` count         | Sorting aligns chars; Map counts handle freq    |
// | Substring search                  | Sliding window OR `str.includes()`       | Window for patterns, includes for direct search |
// | Reverse words                     | `split(" ") → reverse → join(" ")`       | Easy and fast                                   |

// ---

// ## 🔢 Arrays

// | Problem Pattern              | Best DS / Method                  | Why                         |
// | ---------------------------- | --------------------------------- | --------------------------- |
// | Find max/min element         | Simple loop OR `Math.max(...arr)` | Direct O(n)                 |
// | Find duplicates              | `Set`                             | Set auto-removes duplicates |
// | Count frequency              | `Map` OR object `{}`              | Store element → count       |
// | Intersection of two arrays   | `Set` + filter                    | Fast O(n) membership checks |
// | Prefix sums / running totals | Extra array for prefix sums       | Enables O(1) range queries  |
// | Sorting-based problems       | `arr.sort((a,b)=>a-b)`            | Quick access to order       |

// ---

// ## 📊 Hashing (Map / Set usage)

// | Problem Pattern                         | Use                               | Why                   |
// | --------------------------------------- | --------------------------------- | --------------------- |
// | Key → single value (e.g., char → index) | `Map`                             | Direct lookup         |
// | Key → frequency count                   | `Map` or `{}`                     | Store counts easily   |
// | Just need uniqueness                    | `Set`                             | No duplicates allowed |
// | Need order + uniqueness                 | `Map` (preserves order since ES6) | Both features         |

// ---

// ## 📏 Two Pointers

// | Problem Pattern                    | Use Case                  | Why                               |
// | ---------------------------------- | ------------------------- | --------------------------------- |
// | Sorted array problems (sum, pairs) | `left` & `right` pointers | Move intelligently towards target |
// | Palindrome check                   | Start & end pointers      | Compare symmetric chars           |
// | Remove duplicates in place         | Move slow & fast pointers | Efficient without extra space     |

// ---

// ## 🪟 Sliding Window

// | Problem Pattern                                                        | Use Case                  | Why                     |
// | ---------------------------------------------------------------------- | ------------------------- | ----------------------- |
// | Longest substring with condition (no repeats, ≤k distinct chars, etc.) | Expand & shrink window    | Dynamic window adapts   |
// | Subarray sum problems                                                  | Grow/shrink window        | Avoid O(n²) brute force |
// | Pattern search                                                         | Compare fixed-size window | Efficient scanning      |

// ---

// ## 📚 Stacks

// | Problem Pattern      | Use Case             | Why                           |
// | -------------------- | -------------------- | ----------------------------- |
// | Balanced brackets    | Push open, pop close | Natural for nested structures |
// | Next greater element | Stack of indices     | Monotonic stack efficient     |
// | Undo/Redo systems    | Stack                | LIFO behavior fits            |

// ---

// ## 🌲 Trees / Graphs

// | Problem Pattern       | Use Case                                  | Why                    |
// | --------------------- | ----------------------------------------- | ---------------------- |
// | Level-order traversal | Queue (BFS)                               | Process level by level |
// | Depth-first traversal | Recursion or stack (DFS)                  | Explore paths deeply   |
// | Shortest path         | BFS for unweighted, Dijkstra for weighted | Standard graph algo    |
// | Detect cycles         | DFS + visited set                         | Detect revisits        |

// ---

// ## 💡 General Strategy

// * **Maps/Sets** → when you need **fast lookup (O(1))** or uniqueness/frequency.
// * **Two pointers** → when array/string is sorted OR problem is about comparing ends.
// * **Sliding window** → when dealing with substrings/subarrays & max/min/length.
// * **Stack** → when nesting/undo/next-greater-element is involved.
// * **Plain loop/index** → when order matters (prefix, suffix, sequence).

// > "If problem asks about uniqueness → use Set, if about order → use array, if about frequency → use Map"
