const dateFormatter = (time) => {
  let hours = String(time.getHours()).padStart(2, "0");
  let minutes = String(time.getMinutes()).padStart(2, "0");
  let seconds = String(time.getSeconds()).padStart(2, "0");

  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return formattedTime;
};

const toMilliSecond = (timeStr) => {
  const [h, m, s] = timeStr.split(":").map(Number);
  return (h * 3600 + m * 60 + s) * 1000;
};

const myTime = "18:38:00";

function printRemainingTime() {
  let now = new Date();
  let runningTime = dateFormatter(now);

  let diff = toMilliSecond(myTime) - toMilliSecond(runningTime);

  if (diff <= 0) {
    console.log("Timer is up");
    return false;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60)); // hh
  const minutes = Math.floor((diff / (1000 * 60)) % 60); // mm

  // const minutes = Math.floor(diff / 1000 / 60);
  // const seconds = Math.floor((diff / 1000) % 60);

  if (hours > 0) {
    console.log(`${hours} hour${hours > 1 ? "s" : ""} ${minutes} min to go`);
  } else {
    console.log(`${minutes} minute${minutes > 1 ? "s" : ""} to go`);
  }

  return true;
}

function interval() {
  if (!printRemainingTime()) return;

  const timer = setInterval(() => {
    if (!printRemainingTime()) {
      clearInterval(timer);
    }
  }, 60 * 1000);
}

interval();
