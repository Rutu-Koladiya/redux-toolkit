type StudentType = {
  type: "student";
  id: number;
  name: string;
  standard: string | number;
  marks: number[];
};

type TeacherType = {
  type: "teacher";
  id: number;
  name: string;
  subject: string;
  experience: string | number;
};

type Staff = StudentType | TeacherType;

// extends here means: T must be an object that has at least a property id of type number
class Repository<T extends { id: number }> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  getById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  update(id: number, update: Partial<T>): T | undefined {
    const item = this.getById(id);
    if (item) {
      Object.assign(item, update);
    }
    return item;
  }

  getAll(): T[] {
    return this.items;
  }
}

function printDetails(staff: Staff) {
  if (staff.type === "teacher") {
    console.log(`Teacher: ${staff.name}, Subject: ${staff.subject}`);
  } else {
    console.log(
      `Student: ${staff.name}, Standard: ${staff.standard}, Avg Marks: ${
        staff.marks.reduce((a, b) => a + b, 0) / staff.marks.length
      }`
    );
  }
}

function printProps<T>(item: T) {
  for (const key in item) {
    const k = key as keyof T;
    console.log(`${String(k)}: ${item[k]}`);
  }
}

const studentRepo = new Repository<StudentType>();
const teacherRepo = new Repository<TeacherType>();

const student1: StudentType = {
  type: "student",
  id: 1,
  name: "Rutu",
  standard: 12,
  marks: [98, 94, 96],
};

const teacher1: TeacherType = {
  type: "teacher",
  id: 1,
  name: "Lalita",
  subject: "CA",
  experience: "1 yr 6 months",
};

studentRepo.add(student1);
teacherRepo.add(teacher1);

studentRepo.update(1, { name: "Rutu K" });
teacherRepo.update(1, { experience: "2 yrs" });

printDetails(student1);
printDetails(teacher1);

console.log("Student Props:");
printProps(student1);

console.log("Teacher Props:");
printProps(teacher1);

// using class
class Student {
  id: number;
  name: string;
  standard: number;
  marks: number[];

  constructor(id: number, name: string, standard: number, marks: number[]) {
    this.id = id;
    this.name = name;
    this.standard = standard;
    this.marks = marks;
  }

  calculateAvg(): number {
    return this.marks.reduce((acc, mark) => acc + mark, 0);
  }

  getGrade(): string {
    const avg = this.calculateAvg();
    if (avg >= 90) return "A";
    if (avg >= 70) return "B";
    if (avg >= 30) return "C";
    return "F";
  }

  promote(): void {
    this.standard += 1;
  }
}

class Teacher {
  readonly id: number;
  name: string;
  subject: string;
  experience: number;

  constructor(id: number, name: string, subject: string, experience: number) {
    this.id = id;
    this.name = name;
    this.subject = subject;
    this.experience = experience;
  }

  addExperience(years: number): void {
    this.experience += years;
  }
}

type Timepass = {
  waiting: boolean;
  far: number; //in km
}

type Staffs = Student | Teacher;

function printDetail(staff: Staffs) {
  if (staff instanceof Teacher) {
    console.log(
      `Teacher: ${staff.name}, Subject: ${staff.subject}, Exp: ${staff.experience} yrs`
    );
  } else if (staff instanceof Student) {
    console.log(
      `Student: ${staff.name}, Standard: ${staff.standard}, Avg: ${staff
        .calculateAvg()
        .toFixed(2)}, Grade: ${staff.getGrade()}`
    );
  }
}

const studentRepo1 = new Repository<Student>();
const teacherRepo1 = new Repository<Teacher>();

const student = new Student(1, "Rutu", 12, [98, 94, 96]);
const teacher = new Teacher(1, "Lalita", "CA", 2);

studentRepo1.add(student);
teacherRepo1.add(teacher);

studentRepo1.update(1, { name: "Rutu K" });
teacherRepo1.update(1, { experience: 3 });

printDetail(student);
printDetail(teacher);

student.promote();
// console.log(`Promoted Standard: ${student1.standard}`);

teacher.addExperience(2);
// console.log(`Updated Exp: ${teacher1.experience}`);

// 1. Encapsulation (Hiding Internal Details)

//    By making `items` `private`, no one outside the class can **directly access or modify the array.
//    This prevents accidental changes that might break the system.

// Example:

// const repo = new Repository<StudentType>();
// repo.items.push(student1); Error, because items is private

// Instead, they must use class methods (`add`, `update`, `getById`, etc.)
// This ensures rules are followed and data integrity is maintained.

// 2. Controlled Access

// You want full control over how data is changed.
// If `items` was public, anyone could do crazy stuff like:

// repo.items = []; // wipe everything
// repo.items[0] = { id: 99, name: "Hacker" }; // corrupt data

// With `private`, only your methods decide how data is added, updated, or retrieved.

// private → hide data from outside
// methods → controlled access to data
// goal → keep your system safe, predictable, maintainable
