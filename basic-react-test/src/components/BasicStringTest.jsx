// create an single object, take id as key and separate all data from 'detail' key to the specific keys for joiningDate, experienceInYears, and technology.
// experienceInYears key should only show only years (experienceInYears : 10)
// technology key will store the array with all the technology name.

const BasicStringTest = () => {
  const a = [
    {
      id: 101,
      name: "Smit",
      detail: "31-12-2015 30 years reactJS nodeJs",
    },
    {
      id: 102,
      name: "Vanshika",
      detail: "31-12-2015 30 years reactJs .net",
    },
    {
      id: 103,
      name: "Ashika",
      detail: "15-06-2018 8 years angular nodeJs",
    },
    {
      id: 104,
      name: "Sarita",
      detail: "05-07-2019 5 years angular .net",
    },
    {
      id: 105,
      name: "Anandi",
      detail: "22-09-2017 6 years vueJS python",
    },
    {
      id: 106,
      name: "Parth",
      detail: "10-03-2016 12 years reactJS java spring",
    },
    {
      id: 107,
      name: "Jainee",
      detail: "11-11-2020 4 years reactJS django",
    },
    {
      id: 108,
      name: "Jenish",
      detail: "09-02-2014 15 years vueJS ruby",
    },
    {
      id: 109,
      name: "Suraj",
      detail: "19-08-2012 18 years java spring hibernate",
    },
    {
      id: 110,
      name: "Dhruvi",
      detail: "30-04-2011 20 years reactJS nodeJs php",
    },
  ];

  const transformData = (arr) => {
    let result = {};
    arr.forEach((person) => {
      const data = person.detail.split(" ");

      const joiningDate = data[0];
      const experienceInYears = Number(data[1]);
      const technology = data.slice(3);

      result[person.id] = {
        name: person.name,
        joiningDate,
        experienceInYears,
        technology,
      };
    });

    return result;
  };

  console.log(transformData(a));
  
};

export default BasicStringTest;
