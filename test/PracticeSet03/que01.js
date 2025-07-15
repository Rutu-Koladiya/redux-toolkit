// Q1) Balanced Brackets with Distance Constraint

// You are given a string that may contain any characters, including round brackets ( and ). Your task is to determine whether every opening bracket ( has a corresponding closing bracket ) that appears within the next 4 characters (inclusive) of the opening bracket’s position.

// Additionally:

//     All brackets must be balanced  i.e., every ( must have one and only one matching ).

//      doesn’t meet this condIf even one opening bracketition (either unmatched or too far), the function should return "NO".

// Rule Recap:

//     Match brackets like usual, but add constraints of max 4 character gap.

//     Only valid if all ( have matching ) within 4 positions (inclusive).

// Example:

// Input: "a(b)c)d"
// Output: YES

// Input: "abc(defgh)"
// Output: NO

const isMatchingConstraints = (str) => {
  const data = str.split("");

  if (data.includes("(")) {
    const startPosition = data.indexOf("(");

    for (let i = startPosition; i < startPosition + 4; i++) {
      if (data[i] === ")") {
        return "YES";
      }
    }
    return "NO";
  }
};

const input1 = "a(b)c)d";
const input2 = "abc(defgh)";

console.log(isMatchingConstraints(input1));
console.log(isMatchingConstraints(input2));
