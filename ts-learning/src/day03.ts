// 1. Write a function `calculateArea(shape: "circle" | "square", value: number): number`

//    * If circle → return π \* r²
//    * If square → return side²

// 2. Create an interface `Car { type: "car"; speed: number }` and `Bike { type: "bike"; cc: number }`.

//    * Write a function `describeVehicle(v: Car | Bike)` using **narrowing** to print details.

// 3. Create a function `logStatus(status: "online" | "offline" | "busy")` that logs a custom message.

function calculateArea(shape: "circle" | "square", value: number): number {
  if (shape === "circle") {
    return 3.14 * (value * value);
  } else {
    return value * value;
  }
}

console.log(calculateArea("circle", 2));
interface Car {
  type: "car";
  speed: number;
}
interface Bike {
  type: "bike";
  cc: number;
}

function describeVehicle(v: Car | Bike) {
  if ("speed" in v) {
    return `It's car with speed ${v.speed}`;
  } else {
    return `It's a bike with cc ${v.cc}`;
  }
}

const car: Car = {
  type: "car",
  speed: 200,
};

console.log(describeVehicle(car));

function logStatus(status: "online" | "offline" | "busy") {
  if (status === "online") {
    console.log("You are online");
  } else if (status === "busy") {
    console.log("Talking with someone else");
  } else {
    console.log("Offline right now");
  }
}

logStatus("offline");

// Model a **Banking System**:

// 1. `Account` type: `{ id, ownerName, balance }`
// 2. `TransactionType = "deposit" | "withdraw"` (literal type).
// 3. `function performTransaction(account: Account, type: TransactionType, amount: number): Account`

//    * If deposit → add balance.
//    * If withdraw → subtract (only if sufficient funds).
//    * Return updated account.

type Account = {
  id: number;
  ownerName: string;
  balance: number;
};

type TransactionType = "deposit" | "withdraw";

function performTransaction(
  account: Account,
  type: TransactionType,
  amount: number
) {
  if (type === "deposit") {
    account.balance += amount;
  } else {
    if (amount <= account.balance) {
      account.balance -= amount;
    } else {
      console.log("Insufficient funds! Transaction cancelled.");
    }
  }
  return account;
}

let acc: Account = { id: 1, ownerName: "Rutu", balance: 1000 };
console.log(performTransaction(acc, "withdraw", 1600));
// Output: { id: 1, ownerName: "Rutu", balance: 500 }
