function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 2));

// 02 - array
const foods: string[] = [
  "PaniPuri",
  "Dosa",
  "Khichdi",
  "Sandwiches",
  "Pizza",
  "Sub",
];

for (let food of foods) {
  console.log(food);
}

let product: [number, string, boolean] = [1, "Polo Tshirts", true];
console.log(product);

enum PaymentStatus {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  PENDING = "PENDING",
}

const myPaymentStatus: PaymentStatus = PaymentStatus.SUCCESS;
console.log(myPaymentStatus);

// Task:
// Create a small program that models a student’s profile with the following:

// A Student tuple: [id, name, isEnrolled].

// An enum for CourseStatus = ACTIVE, COMPLETED, DROPPED.

// An array of string subjects (at least 5).

// A function enrollStudent(studentId: number, course: string): string → returns a success message.

// 👉 Example usage:

// let student: [number, string, boolean] = [101, "Rutu", true];
// let subjects: string[] = ["Math", "Science", "History", "English", "Art"];
enum CourseStatus {
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
  DROPPED = "DROPPED",
}

function enrollStudent (studentId: number, course: string,status: CourseStatus): string {
    return `Student ${studentId} enrolled in ${course} [${status}]`
}

console.log(enrollStudent(101, "Math", CourseStatus.ACTIVE));
// Output: Student 101 enrolled in Math
