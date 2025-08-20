// 1. Create an `interface Student` with:

//    * `id: number`, `name: string`, `age: number`
//    * `email?: string` (optional)
//    * `readonly rollNo: number`

// 2. Create a `type Teacher` with:

//    * `id: number`, `subject: string`, `experience: number`

// 3. Create an `enum` for `Grade = A, B, C, D, F`.

// 4. Create an `interface ReportCard` with:

//    * `student: Student`
//    * `teacher: Teacher`
//    * `grade: Grade`

// 5. Make one real example of a `ReportCard` object and `console.log` it.

// ---

interface Student {
  id: number;
  name: string;
  age: number;
  email?: string;
  readonly rollNo: number;
}

type Teacher = {
  id: number;
  subject: string;
  experience: number;
};

enum GRADE {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  F = "F",
}

interface ReportCard {
  student: Student;
  teacher: Teacher;
  grade: GRADE;
}

const student1: Student = {
  id: 1,
  name: "Rutu",
  age: 20,
  rollNo: 160,
};

const teacher1: Teacher = {
  id: 2,
  subject: "Echo",
  experience: 6,
};

const data: ReportCard = {
  student: student1,
  teacher: teacher1,
  grade: GRADE.A,
};

console.log(data);

const { student, teacher, grade } = data;
console.log(`${student.name} got ${grade} grade in ${teacher.subject}`);

// ## 📌 Mini Assignment (EOD – Day 2)

// Build a **Hospital Management Model** using TypeScript:

// * `Patient` interface: `{ id, name, age, disease (optional) }`
// * `Doctor` type: `{ id, name, specialization }`
// * `enum AppointmentStatus = CONFIRMED, CANCELLED, COMPLETED`
// * `Appointment` interface: `{ appointmentId, patient, doctor, status }`

// 👉 Then, create one appointment object and log it.

interface Patient {
  id: number;
  name: string;
  age: number;
  disease?: string;
}

type Doctor = {
  id: number;
  name: string;
  specialization: string;
};

enum AppointmentStatus {
  CONFIRMED = "CONFIRMED",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
}

interface Appointment {
  appointmentId: number;
  patient: Patient;
  doctor: Doctor;
  status: AppointmentStatus;
}

const patient: Patient = {
  id: 1,
  name: "Ravina Tondan",
  age: 42,
};

const doctor: Doctor = {
  id: 20,
  name: "Radhi",
  specialization: "Eyes",
};

const info: Appointment = {
  appointmentId: 1,
  patient,
  doctor,
  status: AppointmentStatus.CONFIRMED,
};

console.log(
  `${info.patient.name} got Dr.${info.doctor.name}'s ${info.status} appointment`
);

if (info.status === AppointmentStatus.CONFIRMED) {
  console.log(
    `${info.patient.name} has a confirmed appointment with Dr.${info.doctor.name}`
  );
}
