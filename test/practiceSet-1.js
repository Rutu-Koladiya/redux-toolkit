// 1.  Given an array of user objects, write a function that returns the user object with the id of 3.

const findUserById = (users, id) => {
  return users.find((user) => user.id === id);
};

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
console.log(findUserById(users, 2));

// 2. Sort an array of strings alphabetically in ascending order.

const sortFruits = (arr) => {
  return arr.sort((a, b) => a.localeCompare(b));
};

const fruits = ["Banana", "Apple", "Cherry", "Date"];
console.log(sortFruits(fruits));

// 3.  Write a function that calculates the total sum of an array of numbers using the reduce method.

const sumArray = (arr) => {
  return arr.reduce((acc, a) => a + acc, 0);
};

const numbers = [5, 10, 15];
console.log(sumArray(numbers));

// 4.  Convert an array of key-value pair objects into a single object.

const convertToObject = (arr) => {
  const convertedObj = {};
  arr.forEach((element) => {
    convertedObj[element.key] = element.value;
  });

  return convertedObj;
};

const keyValuePairs = [
  { key: "name", value: "Alice" },
  { key: "age", value: 30 },
];
console.log(convertToObject(keyValuePairs));

console.log("-----------------");

// 5.  Write a function that groups an array of objects by a specific property.

const groupByRole = (arr) => {
  return arr.reduce((acc, a) => {
    const role = a.role;

    if (!acc[role]) {
      acc[role] = [];
    }
    acc[role].push(a);
    return acc;
  }, {});
};

const data = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
];
console.log(groupByRole(data));
