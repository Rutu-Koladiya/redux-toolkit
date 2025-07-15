// Q3) Find Deepest Nested Property Path

// You are given a JavaScript object that may contain nested objects as its properties. Your task is to write a function that finds the path to the deepest nested property within the object.

//     The "path" should be returned as a string, where each property name is separated by a dot (.).

//     If there are multiple properties at the deepest level, you can return the path to any one of them.

//     Only consider properties that are objects (not arrays or other types) for nesting.

// Input: A JavaScript object, which may have any level of nested objects.
// Output : A string representing the path to the deepest property, using dot notation.

// Input: {a: { b: { c: { d: 5 } }, e: 2 }, f: 3}
// Output: 'a.b.c.d'

// Input: { foo: 1, bar: 2 }
// Output: 'foo' // or 'bar'

const findNestedPath = (obj) => {
  let path = "";

  for (let key in obj) {
    console.log(key, "key");
    
    if (typeof obj[key] === "object") {
      console.log(key);
      path += `${key}.`;
      path += findNestedPath(obj[key]);
      console.log(obj[key], "holla");
    }
  } 
  return path;
};

const input1 = { a: { b: { c: { d: 5 } }, e: 2 }, f: 3 };
const input2 = { foo: 1, bar: 2 };

console.log(findNestedPath(input1));
console.log(findNestedPath(input2));
