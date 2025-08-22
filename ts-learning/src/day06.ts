// ### **1️⃣ Utility Types – Super Powerful**

// TypeScript provides built-in types to **manipulate your existing types** without rewriting everything.

// ---

// #### **a) Partial**

// Makes all properties optional. Useful for **update functions**.

// ```ts
// interface Student {
//   id: number;
//   name: string;
//   marks: number[];
// }

// function updateStudent(student: Student, update: Partial<Student>): Student {
//   return { ...student, ...update };
// }

// const rutu: Student = { id: 1, name: "Rutu", marks: [98, 94, 96] };
// const updatedRutu = updateStudent(rutu, { name: "Rutu K" });

// console.log(updatedRutu);
// // { id: 1, name: "Rutu K", marks: [98,94,96] }

// ✅ Real-world lesson: Perfect for APIs where users can **update only some fields**.

// #### **b) Pick**

// Pick specific properties from a type.

// type StudentInfo = Pick<Student, "id" | "name">;
// const info: StudentInfo = { id: 1, name: "Rutu" };

// ✅ Real-world: Use when you want to **return only limited info** from database/API.

// #### **c) Omit**

// Opposite of Pick — remove properties.

// type StudentNoMarks = Omit<Student, "marks">;
// const s: StudentNoMarks = { id: 1, name: "Rutu" };

// ✅ Real-world: When sending data externally, you might **omit sensitive info**.

// #### **d) Readonly**

// Makes all properties immutable.

// const r: Readonly<Student> = { id: 1, name: "Rutu", marks: [98, 94] };
// // r.name = "Rutu K" ❌ Error

// ✅ Real-world: Perfect for **constants or configs**.

// ### **2️⃣ Discriminated Unions (Type Guards)**

// Used to handle **different types in one structure safely**.

// interface Car {
//   type: "car";
//   speed: number;
// }

// interface Bike {
//   type: "bike";
//   cc: number;
// }

// type Vehicle = Car | Bike;

// function describeVehicle(v: Vehicle) {
//   switch (v.type) {
//     case "car":
//       console.log(`Car speed: ${v.speed}`);
//       break;
//     case "bike":
//       console.log(`Bike cc: ${v.cc}`);
//       break;
//   }
// }

// ✅ Real-world: API responses often have **different shapes**, discriminated unions make handling them safe.

// ### **3️⃣ `keyof` & Mapped Types**

// * `keyof` → gives you all keys of a type as a union.

// type StudentKeys = keyof Student;
// // "id" | "name" | "marks"

// * Combined with **mapped types**:

// type StudentBooleans = {
//   [K in keyof Student]: boolean;
// };
// // { id: boolean; name: boolean; marks: boolean; }

// ✅ Real-world: Great for **forms**, **validation flags**, or **dynamic mapping**.

// # **🔑 `keyof` in TypeScript**

// * `keyof` takes a **type** (object/interface) and gives you a **union of its property names** as strings.
// * Think of it as: *“I want a type that represents all the keys of this object.”*

// ---

// ### **Example 1 – Basic `keyof`**

// ```ts
// interface Student {
//   id: number;
//   name: string;
//   marks: number[];
// }

// type StudentKeys = keyof Student;
// // "id" | "name" | "marks"
// ```

// ✅ Here:

// * `StudentKeys` is now a **type**, not a value.
// * You can only assign `"id"`, `"name"`, or `"marks"` to a variable of type `StudentKeys`.

// let key: StudentKeys;

// key = "id";    // ✅ OK
// key = "name";  // ✅ OK
// key = "marks"; // ✅ OK
// // key = "age"; // ❌ Error: not in Student

// ### **Example 2 – Using `keyof` dynamically**

// function printProperty<T>(obj: T, key: keyof T) {
//   console.log(obj[key]);
// }

// const student: Student = { id: 1, name: "Rutu", marks: [98, 94, 96] };

// printProperty(student, "name"); // "Rutu"
// printProperty(student, "marks"); // [98, 94, 96]
// // printProperty(student, "age"); // ❌ Error

// ✅ Real-world lesson:

// * You can safely **access properties dynamically** without losing type safety.
// * TypeScript **checks the key exists** in the object at compile time.

// ### **Example 3 – Looping through keys**

// ```ts
// for (const key in student) {
//   const k = key as keyof Student; // type assertion
//   console.log(`${k}: ${student[k]}`);
// }

// Output:

// id: 1
// name: Rutu
// marks: 98,94,96

// * `keyof` ensures **you only access valid keys**.

// ### **Real-World Analogy**

// * Imagine a **student report card**.
// * `keyof Student` = all headings on the card (`id`, `name`, `marks`)
// * Now you can **dynamically print any heading** without typing it manually.

// If you want, I can also show you **how `keyof` + mapped types** can help **create validation flags, forms, or dynamic objects** — that’s super powerful in real apps.

// ### **4️⃣ Real-World Mini Exercise**

// 1. Create a **Teacher** type with: `{id, name, subject, experience}`
// 2. Create a function `updateTeacher` using **Partial**
// 3. Create a union type `Staff = Teacher | Student` and write a **safe type guard** to print details.
// 4. Use `keyof` to loop through `Teacher` properties and log **key\:value** dynamically.

type Teacher = {
  type: "teacher";
  id: number;
  name: string;
  subject: string;
  experience: number | string;
};

type Student = {
  type: "student";
  id: number;
  name: string;
  standard: number | string;
};

type Staff = Teacher | Student;

function printDetails(p: Staff) {
  switch (p.type) {
    case "teacher":
      console.log(`It's ${p.subject} teacher`);
      break;
    case "student":
      console.log(`It's ${p.standard} student`);
      break;
  }
}

function updateTeacher(teacher: Teacher, update: Partial<Teacher>): Teacher {
  return { ...teacher, ...update };
}

const teacher: Teacher = {
  type: "teacher",
  id: 1,
  name: "lalita",
  subject: "CA",
  experience: "1 yr 6 months",
};
const updatedTeacher = updateTeacher(teacher, { name: "lalita deshmukh" });

function printTeacherProps(teacher: Teacher) {
  for (const key in teacher) {
    const k = key as keyof Teacher;
    console.log(`${k}: ${teacher[k]}`);
  }
}

console.log(updatedTeacher);
printDetails(teacher);
printTeacherProps(updatedTeacher);
