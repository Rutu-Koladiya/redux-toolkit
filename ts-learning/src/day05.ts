// # 📘 **Day 05 – Generics (Reusable & Flexible Code)**

// ### 🔑 Why Generics?

// * In JavaScript, functions and classes are flexible, but **they lose type safety**.
// * In TypeScript, you might lock things down too much.
// * **Generics give you both flexibility + type safety**.

// 👉 Think of generics like creating a *function/class blueprint* that can work with any type, but still enforces consistency.

// ---

// ## 1. Basic Example – Generic Function

// ```ts
// function identity<T>(value: T): T {
//   return value;
// }

// console.log(identity<string>("Hello"));  // "Hello"
// console.log(identity<number>(42));       // 42
// ```

// Here:

// * `<T>` = a type parameter (you can name it `T`, `U`, `Item`, etc.)
// * `identity<T>` → says “this function takes a type `T` and returns the same type `T`”.

// > 💡 Without generics, you’d either:

// * use `any` (lose type safety), or
// * write separate functions for each type (duplicate code).

// ---

// ## 2. Generics with Arrays

// ```ts
// function getFirstElement<T>(arr: T[]): T {
//   return arr[0];
// }

// console.log(getFirstElement<number>([10, 20, 30])); // 10
// console.log(getFirstElement<string>(["Rutu", "TS"])); // "Rutu"
// ```

// ⚡ Notice:

// * TypeScript **infers** the type automatically:

// ```ts
// console.log(getFirstElement(["A", "B", "C"])); // Works without <string>
// ```

// ---

// ## 3. Generics with Constraints (`extends`)

// What if we want to ensure a generic type has certain properties?

// ```ts
// interface HasLength {
//   length: number;
// }

// function logLength<T extends HasLength>(item: T): void {
//   console.log(item.length);
// }

// logLength("Hello");     // ✅ string has length
// logLength([1, 2, 3]);   // ✅ array has length
// // logLength(123);      ❌ number doesn’t have length
// ```

// ---

// ## 4. Real World Example – Student Database

// Let’s bring this to your **student grading system**.

type Student = {
  id: number;
  name: string;
  marks: number[];
};

function findById<T extends { id: number }>(
  list: T[],
  id: number
): T | undefined {
  return list.find((item) => item.id === id);
}

const students: Student[] = [
  { id: 1, name: "Rutu", marks: [98, 94, 96] },
  { id: 2, name: "Alex", marks: [85, 79, 82] },
];

console.log(findById(students, 1)); // { id: 1, name: "Rutu", marks: [...] }

// * Generic `<T>` makes `findById` reusable for *any object type with `id: number`* (not just `Student`).
// * You could use the same for `Teacher[]`, `Course[]`, etc.

// ## 5. Generics with Classes

// class DataStore<T> {
//   private items: T[] = [];

//   add(item: T): void {
//     this.items.push(item);
//   }

//   getAll(): T[] {
//     return this.items;
//   }
// }

// const studentStore = new DataStore<Student>();
// studentStore.add({ id: 1, name: "Rutu", marks: [90, 95] });
// console.log(studentStore.getAll());
// ```

// Now `studentStore` only accepts `Student` type, but you could also make `DataStore<Course>` etc.
// One reusable class → many specific types.

// # ✅ Your Task (Real World Practice)

// 1. Create a **generic function** `getTopStudent<T extends { marks: number[] }>` that takes a list of students (or any object with marks) and returns the one with the highest average.
// 2. Create a **generic class** `Repository<T extends { id: number }>` with methods:

//    * `add(item: T)`
//    * `findById(id: number): T | undefined`
//    * `getAll(): T[]`

function getTopStudent<T extends { marks: number[] }>(
  list: T[],
  id: number
): T | undefined {
  let maxAvg = -Infinity;
  let topStudent: T | undefined;
  for (let item of list) {
    let avg =
      item.marks.reduce((acc, mark) => acc + mark, 0) / item.marks.length;
    if (avg > maxAvg) {
      maxAvg = avg;
      topStudent = item;
    }
  }
  return topStudent
}

const student1: Student[] = [
  { id: 1, name: "Rutu", marks: [98, 94, 96] },
  { id: 2, name: "Alex", marks: [85, 79, 82] },
];

// ## 🏫 What is a Class?

// Think of a **class** as a **blueprint** or **template** for creating objects.

// * In **JS/TS**, objects are real things (like a student, car, book).
// * A **class** is just a **design** for those objects.

// 👉 Example:
// A `Student` class = blueprint for making many students.

// ---

// ## 📦 Breaking Down a Class

// ```ts
// class Student {
//   id: number;
//   name: string;
//   marks: number[];

//   constructor(id: number, name: string, marks: number[]) {
//     this.id = id;       // this = the object being created
//     this.name = name;
//     this.marks = marks;
//   }

//   // Method: behavior of the student
//   calculateAverage(): number {
//     return this.marks.reduce((acc, m) => acc + m, 0) / this.marks.length;
//   }

//   getGrade(): string {
//     const avg = this.calculateAverage();
//     if (avg >= 90) return "A";
//     if (avg >= 75) return "B";
//     return "C";
//   }
// }
// ```

// ---

// ## 🧑‍🎓 Using the Class

// ```ts
// const rutu = new Student(1, "Rutu", [98, 94, 96]);
// const alex = new Student(2, "Alex", [85, 79, 82]);

// console.log(rutu.calculateAverage()); // 96
// console.log(rutu.getGrade());         // "A"

// console.log(alex.calculateAverage()); // 82
// console.log(alex.getGrade());         // "B"
// ```

// ---

// ## ⚡ Why Classes?

// 1. **Reusable** → You don’t repeat code for every student. Just call `new Student(...)`.
// 2. **Organized** → Data (properties) + Behavior (methods) live together.
// 3. **Scalable** → In real-world apps (React, Node, Angular), classes help model complex entities (Users, Products, Orders).

// ---

// ## 🎯 Real-World Analogy

// * **Blueprint (class)** = Plan for a car.
// * **Car (object)** = Actual car built from that plan.
// * **Methods (functions inside class)** = Actions the car can perform (drive, brake, honk).

// ---

// ## 📝 Small Task for You

// Write a **`Car` class** with:

// * properties: `brand`, `model`, `year`, `mileage`
// * method: `drive(km: number)` → increases mileage
// * method: `getDetails()` → returns string like `"Tesla Model 3 (2023), Mileage: 10000km"`

// ---

// 👉 Once you write it, I’ll help you refactor and add **TypeScript power-ups** like `private`, `readonly`, and `inheritance`.

// Do you want me to **first show the `Car` example solved** (like a demo), or do you want to **try first and then I’ll fix it**?
