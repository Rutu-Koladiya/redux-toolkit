// ## 1️⃣ Function Basics

// function greet(name: string): string {
//   return `Hello, ${name}`;
// }
// console.log(greet("Rutu")); // ✅ "Hello, Rutu"

// 👉 Always specify parameter **types** and **return types**.

// ## 2️⃣ Optional & Default Parameters

// function welcome(user: string, msg?: string) {
//   return `${msg ?? "Hi"}, ${user}`;
// }
// console.log(welcome("Rutu")); // "Hi, Rutu"

// function multiply(a: number, b: number = 2) {
//   return a * b;
// }
// console.log(multiply(5)); // 10

// 🔑 **Lesson:**
// Optional (`?`) = not always required.
// Default = fallback value.

// ## 3️⃣ Function Types (as Variables)

// type MathOperation = (a: number, b: number) => number;

// const add: MathOperation = (x, y) => x + y;
// const subtract: MathOperation = (x, y) => x - y;

// console.log(add(5, 3)); // 8

// 👉 This is powerful for **reusable APIs**.

// ## 4️⃣ Function Overloading

// TypeScript lets you **define multiple call signatures**.

// function getInfo(value: string): string;
// function getInfo(value: number): string;

// function getInfo(value: string | number): string {
//   if (typeof value === "string") {
//     return `Your name is ${value}`;
//   } else {
//     return `Your age is ${value}`;
//   }
// }

// console.log(getInfo("Rutu")); // "Your name is Rutu"
// console.log(getInfo(22));     // "Your age is 22"

// 👉 Useful when a function behaves differently based on input.


// ## 5️⃣ Rest Parameters

// function sumAll(...nums: number[]): number {
//   return nums.reduce((acc, cur) => acc + cur, 0);
// }
// console.log(sumAll(1, 2, 3, 4, 5)); // 15
// ```

// 👉 Great for **dynamic arguments** (shopping cart total, etc.).


// ## 6️⃣ Arrow Functions

// const square = (n: number): number => n * n;
// console.log(square(5)); // 25


type Employee = { id: number; name: string; salary: number };

function updateSalary(emp: Employee, bonus: number = 0): Employee {
  return { ...emp, salary: emp.salary + bonus };
}

const emp1: Employee = { id: 1, name: "Rutu", salary: 50000 };
console.log(updateSalary(emp1, 5000)); // salary = 55000

// ## 📌 Mini Assignment (EOD – Day 4)

// 👉 Build a **Student Grading System**:

// 1. Type: `Student = { id, name, marks: number[] }`
// 2. `function calculateAverage(student: Student): number` → returns average marks.
// 3. `function getGrade(avg: number): "A" | "B" | "C" | "F"`

//    * A: avg ≥ 90
//    * B: avg ≥ 75
//    * C: avg ≥ 50
//    * F: otherwise
// 4. Test with a few students.

type Student = {
  id: number;
  name: string;
  marks: number[];
};

function calculateAverage(student: Student): number {
  const totalMarks = student.marks.reduce((acc, mark) => acc + mark, 0);
  return totalMarks / student.marks.length;
}

const getGrade = (avg: number): string => {
  if (avg >= 90) {
    return "A";
  } else if (avg >= 75) {
    return "B";
  } else if (avg >= 50) {
    return "C";
  } else {
    return "F";
  }
};

// it returns nothing useful → that’s why TypeScript marks it as void. it doesn’t give back a value that you can store in a variable or reuse.

// Use void when your function’s purpose is only to cause side effects (logging, updating DB, sending emails).

// Use a return type (like string, number, object, etc.) when the function’s purpose is to produce reusable data that other code can use.

function printReport(student: Student): void {
  const avg = calculateAverage(student);
  const grade = getGrade(avg);

  console.log(`🎓 Report Card for ${student.name}`);
  console.log(`Average: ${avg.toFixed(2)}`);
  console.log(`Grade: ${grade}`);
}

const student1: Student = {
  id: 1,
  name: "Rutu",
  marks: [98, 86, 99, 94, 98],
};

printReport(student1);
