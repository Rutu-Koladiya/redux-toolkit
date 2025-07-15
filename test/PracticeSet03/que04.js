// Q4) Convert CSV to JSON

// You are given a CSV-formatted string containing multiple rows. Your task is to convert this CSV string into a JSON array of objects using JavaScript.

const csvParser = (string) => {
  const data = string.trim().split("\n");

  const keys = data[0].split(",").map((key) => key.trim());

  const res = data.slice(1).map((user) => {
    const values = user.split(",").map((value) => value.trim());

    const obj = {};

    keys.forEach((key, index) => {
      obj[key] = values[index];
    });
    return obj;
  });

  return res;
};

const input = `name, email, phone
John Doe, johndoe@example.com, 555-1234
Jane Smith, janesmith@example.com, 555-5678`;

console.log(csvParser(input));
