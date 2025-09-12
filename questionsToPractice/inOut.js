// You work at a company that tracks employee check-in and check-out times. Employees scan their badges, and the system logs an event like:

// [
//   { employeeId: "E001", type: "IN", timestamp: "2025-09-12T09:00:00" },
//   { employeeId: "E002", type: "IN", timestamp: "2025-09-12T09:15:00" },
//   { employeeId: "E001", type: "OUT", timestamp: "2025-09-12T12:00:00" },
//   { employeeId: "E001", type: "IN", timestamp: "2025-09-12T13:00:00" },
//   { employeeId: "E001", type: "OUT", timestamp: "2025-09-12T18:00:00" },
//   { employeeId: "E002", type: "OUT", timestamp: "2025-09-12T17:30:00" },
//   // More events…
// ]

// Your task:

// 1. Calculate total work hours per employee in a day.
// 2. Detect any inconsistent logs, such as:

//     Two consecutive "IN" events without an "OUT" in between.
//     An "OUT" before any "IN".

// Expected Output Example:

// {
//   "E001": {
//     totalHours: 8,
//     inconsistencies: [] // or list of issues
//   },
//   "E002": {
//     totalHours: 8.25,
//     inconsistencies: []
//   }
// }
// ```

// If there is an inconsistency, such as:

// { employeeId: "E003", type: "OUT", timestamp: "2025-09-12T10:00:00" }

// Then, it should be reported like:

// inconsistencies: ["First event is OUT without IN"]

// Stretch Goals (Advanced):

// * Handle multiple days of logs in one input.
// * Allow logs to be unordered by timestamp.
// * Calculate overtime if total hours exceed 8.

// ⚡ Why This Helps:

// * You’ll practice working with arrays, maps/objects, and date-time calculations.
// * You’ll think of edge cases (missing events, unordered data).
// * You'll apply real-world logic that mirrors practical work problems.

// 1. group it by id
// 2, if id exists check first in and note time after that out of that id time - intime, same with other in and out and store all time into one totalHours var, if in and out not corresponding pass "Incorrect"

const workLog = [
  { employeeId: "E001", type: "IN", timestamp: "2025-09-12T09:00:00" },
  { employeeId: "E002", type: "IN", timestamp: "2025-09-12T09:15:00" },
  { employeeId: "E001", type: "OUT", timestamp: "2025-09-12T12:00:00" },
  { employeeId: "E001", type: "IN", timestamp: "2025-09-12T13:00:00" },
  { employeeId: "E001", type: "OUT", timestamp: "2025-09-12T18:00:00" },
  { employeeId: "E002", type: "OUT", timestamp: "2025-09-12T17:30:00" },
];

let groupedLog = {};

workLog.forEach((logEntry) => {
  const logId = logEntry.employeeId;

  if (!groupedLog[logId]) {
    groupedLog[logId] = [];
  }
  groupedLog[logId].push(logEntry);
});

console.log(groupedLog);
