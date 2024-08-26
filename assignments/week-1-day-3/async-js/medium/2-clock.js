//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function updateClock() {
  const now = new Date();
  const time24 = now.toLocaleTimeString("en-GB", { hour12: false });
  const time12 = now.toLocaleTimeString("en-US", { hour12: true });

  console.clear();
  console.log(`24-hour format: ${time24}`);
  console.log(`12-hour format: ${time12}`);
}

setInterval(updateClock, 1000);

updateClock();
