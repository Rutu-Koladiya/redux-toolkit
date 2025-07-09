// 1.  Given an array of user objects, write a function that returns the user object with the

// id of 3.

// const users = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
//     { id: 3, name: "Charlie" },
// ];
// console.log(findUserById(users, 3)); // { id: 3, name: "Charlie" }

// 2.  Sort an array of strings alphabetically in ascending order.

// const fruits = ["Banana", "Apple", "Cherry", "Date"];
// console.log(sortFruits(fruits)); // ["Apple", "Banana", "Cherry", "Date"]

// 3.  Write a function that calculates the total sum of an array of numbers using the reduce method.

// const numbers = [5, 10, 15];
// console.log(sumArray(numbers)); // 30

// 4.  Convert an array of key-value pair objects into a single object.

// const keyValuePairs = [
//     { key: "name", value: "Alice" },
//     { key: "age", value: 30 },
// ];
// console.log(convertToObject(keyValuePairs)); // { name: "Alice", age: 30 }

// 5.  Write a function that groups an array of objects by a specific property.

// const data = [
//     { name: "Alice", role: "admin" },
//     { name: "Bob", role: "user" },
//     { name: "Charlie", role: "admin" },
// ];
// console.log(groupByRole(data));
// // {
// //     admin: [{ name: "Alice", role: "admin" }, { name: "Charlie", role: "admin" }],
// //     user: [{ name: "Bob", role: "user" }]
// // }

// .find() → returns a single match (ideal here)

// .filter() → returns all matches (returns an array)

// .map() → transforms each item

// .reduce() → accumulates data

// .some() / .every() → condition checks
const StringTest = () => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  const findUserById = (arr, id) => {
    // insted of filter coz filter return new array where find return first matching object
    return arr.find((a) => a.id === id);
  };

  const fruits = ["Banana", "Apple", "Cherry", "Date"];
  const sortFruits = (arr) => {
    return arr.sort();
  };

  const numbers = [5, 10, 2];
  const sumArray = (arr) => {
    return arr.reduce((sum, item) => sum + item, 0);
  };

  const keyValuePairs = [
    { key: "name", value: "Alice" },
    { key: "age", value: 30 },
  ];
  const newObj = {};
  const convertToObject = (arr) => {
    // arr.forEach(({ key, value }) => Object.assign(newObj, { [key]: value }));
    // return newObj;

    // second method
    for (let element of arr) {
      newObj[element.key] = element.value;
    }
    return newObj;
  };

  const data = [
    { name: "Alice", role: "admin" },
    { name: "Bob", role: "user" },
    { name: "Charlie", role: "admin" },
  ];
  const groupByRole = (arr) => {
    return arr.reduce((acc, person) => {
      const role = person.role;

      if (!acc[role]) {
        acc[role] = [];
      }

      acc[role].push(person);
      return acc;
    }, {});
  };

  console.log(groupByRole(data));
  // {
  //     admin: [{ name: "Alice", role: "admin" }, { name: "Charlie", role: "admin" }],
  //     user: [{ name: "Bob", role: "user" }]
  // }

  console.log(convertToObject(keyValuePairs)); // { name: "Alice", age: 30 }

  console.log(sumArray(numbers)); // 30

  console.log(sortFruits(fruits)); // ["Apple", "Banana", "Cherry", "Date"]

  console.log(findUserById(users, 3)); // { id: 3, name: "Charlie" }

  //   Count How Many Posts Use Each Technology
  const posts = [
    { title: "Post 1", tech: ["reactJS", "nodeJS"] },
    { title: "Post 2", tech: ["reactJS", "express"] },
    { title: "Post 3", tech: ["vueJS", "nodeJS"] },
  ];

  const countTech = (arr) => {
    return arr.reduce((acc, post) => {
      post.tech.forEach((tech) => {
        acc[tech] = (acc[tech] || 0) + 1;
      });
      return acc;
    }, {});
  };

  console.log(countTech(posts));

  //   Sum likes for each first-letter group
  const posts1 = [
    { title: "React", likes: 100 },
    { title: "Node", likes: 50 },
    { title: "Vue", likes: 80 },
    { title: "jQuery", likes: 10 },
    { title: "Next", likes: 60 },
  ];

  const sumLikesByGroup = (arr) => {
    return arr.reduce((acc, post) => {
      let firstLetter = post.title[0];

      if (!acc[firstLetter]) {
        acc[firstLetter] = 0;
      }

      acc[firstLetter] += post.likes;
      return acc;
    }, {});
  };

  console.log(sumLikesByGroup(posts1));
  //{
  //   R: 100,
  //   N: 110,   // Node + Next
  //   V: 80,
  //   j: 10
  // }

  const arr = [1, [2, 3], [4, [5, 6]], 7];

  const flattenArray = (arr) => {
    let newArr = [];

    for (let a of arr) {
      if (Array.isArray(a)) {
        const flattend = flattenArray(a);
        newArr.push(...flattend)
      } else {
        newArr.push(a);
      }
    }
    return newArr;
  };

  console.log(flattenArray(arr));
};

export default StringTest;
