const data = ["1_rutu_koladiya_surat", "2_rutu_koladiya_surat"];

const formattedData = data.map((item) => {
  const [id, firstName, lastName, city] = item.split("_");

  return {
    id: Number(id),
    firstName,
    lastName,
    city,
  };
});

console.log(formattedData);

// covert string to num ["1", "2", "3"] => [1, 2, 3]

const string = ["1", "2", "3"];

const num = string.map((numbers) => Number(numbers));

console.log(num);

// ["rutu koladiya", "boss lady"]
// → [{ firstName: "rutu", lastName: "koladiya" }, { firstName: "boss", lastName: "lady" }]

const names = ["rutu koladiya", "boss lady"];

const formattedNames = names.map((name) => {
  const [firstName, lastName] = name.split(" ");

  return {
    firstName,
    lastName,
  };
});

console.log(formattedNames);

// ["name:rutu", "city:surat"]
// → { name: "rutu", city: "surat" }

// map always return an array so if you want insted of something array use another method based on need if have to format then reduce.

const arr = ["name:rutu", "city:surat"];

const obj = arr.reduce((acc, curr) => {
  const [key, value] = curr.split(":");

  acc[key] = value;
  return acc;
}, {});

console.log(obj);

// const obj = Object.fromEntries(
//   arr.map(item => item.split(":"))
// );

// const obj = {};
// arr.forEach(item => {
//   const [key, value] = item.split(":");
//   obj[key] = value;
// });
// console.log(obj);

// [{id:1, city:"surat"}, {id:2, city:"mumbai"}, {id:3, city:"surat"}]
// → { surat: [{id:1,...}, {id:3,...}], mumbai: [{id:2,...}] }

const cities = [
  { id: 1, city: "surat" },
  { id: 2, city: "mumbai" },
  { id: 3, city: "surat" },
];

const formattedCity = {};
cities.forEach((item) => {
  const { city } = item;

  if (!formattedCity[city]) {
    formattedCity[city] = [];
  }

  formattedCity[city].push(item);
});

// const formattedCity = cities.reduce((acc, item) => {
//   const { city } = item;
//   if (!acc[city]) acc[city] = [];
//   acc[city].push(item);
//   return acc;
// }, {});

// const formattedCity = Object.groupBy(cities, item => item.city);

console.log(formattedCity);

// [["id", 1], ["name", "rutu"], ["city", "surat"]]
// → { id: 1, name: "rutu", city: "surat" }

const person = [
  ["id", 1],
  ["name", "rutu"],
  ["city", "surat"],
];

const formattedPerson = person.reduce((acc, curr) => {
  const [key, value] = curr;
  acc[key] = value;

  return acc;
}, {});

console.log(formattedPerson);

// [[1, 2], [3, 4], [5]] → [1, 2, 3, 4, 5]

const nestedArray = [[1, 2], [3, 4], [5]];

const flattenArray = nestedArray.flat();

// const flattenArray = nestedArray.reduce((acc, arr) => [...acc, ...arr], []);

console.log(flattenArray);

// const csv = "id,name,city\n1,rutu,surat\n2,boss,mumbai";
// → [{id:1, name:"rutu", city:"surat"}, {id:2, name:"boss", city:"mumbai"}]

// In .reduce((accumulator, currentValue, index) => ...):

// accumulator → object we are building (obj)

// currentValue → current key in the loop (key)

// index → position of the key in keys (i)

const csv = "id,name,city\n1,rutu,surat\n2,boss,mumbai";

const csvFormatter = (csv) => {
  const splittedData = csv.split("\n");

  const key = splittedData[0].split(",");

  const values = splittedData.splice(1).map((value) => value.split(","));

  return values.map((row) => {
    return key.reduce((acc, key, i) => {
      acc[key] = isNaN(row[i]) ? row[i] : Number(row[i]);

      return acc;
    }, {});
  });
};

console.log(csvFormatter(csv));

// [{id:1, city:"surat"}, {id:2, city:"mumbai"}, {id:3, city:"surat"}]
// → ["surat", "mumbai"]

const cityData = [
  { id: 1, city: "surat" },
  { id: 2, city: "mumbai" },
  { id: 3, city: "surat" },
];

const uniqueCity = cityData.reduce((acc, curr) => {
  const { city } = curr;

  if (!acc.includes(city)) acc.push(city);

  return acc;
}, []);

// const unique = [...new Set(cityData.map((item) => item.city))];

console.log(uniqueCity);

// { user: { name: "rutu", address: { city: "surat" } } }
// → { "user.name": "rutu", "user.address.city": "surat" }

// {
//   users: [
//     { uid: 1, details: { first: "rutu", last: "koladiya" } },
//     { uid: 2, details: { first: "boss", last: "lady" } }
//   ]
// }
// → [
//   { id: 1, fullName: "rutu koladiya" },
//   { id: 2, fullName: "boss lady" }
// ]

const response = {
  users: [
    { uid: 1, details: { first: "rutu", last: "koladiya" } },
    { uid: 2, details: { first: "boss", last: "lady" } },
  ],
};

const { users } = response;
console.log(users);

const formatted = users.map((user) => {
  const { details } = user.details;

  console.log(details, "details");

  details.reduce((acc, curr) => {
    const [_, value] = curr;
    acc += value;
    return acc;
  }, "");
});
