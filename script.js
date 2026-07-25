
console.log("Script loaded!");

// Male Akan names
const maleNames = [
  "Kwasi",   // Sunday
  "Kwadwo",  // Monday
  "Kwabena", // Tuesday
  "Kwaku",   // Wednesday
  "Yaw",     // Thursday
  "Kofi",    // Friday
  "Kwame"    // Saturday
];

// Female Akan names
const femaleNames = [
  "Akosua",  // Sunday
  "Adwoa",   // Monday
  "Abenaa",  // Tuesday
  "Akua",    // Wednesday
  "Yaa",     // Thursday
  "Afua",    // Friday
  "Ama"      // Saturday
];

// Function called when the form is submitted
function generateAkanName(event) {
  event.preventDefault();

  // Get user input
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  const gender = document.querySelector('input[name="gender"]:checked');

  // Validate empty fields
  if (!day || !month || !year || !gender) {
    alert("Please fill in all fields.");
    return;
  }

  // Validate day
  if (day < 1 || day > 31) {
    alert("Please enter a valid day (1-31).");
    return;
  }

  // Validate month
  if (month < 1 || month > 12) {
    alert("Please enter a valid month (1-12).");
    return;
  }

  // Create date object
  const birthDate = new Date(year, month - 1, day);

  // Check if the date is valid
  if (
    birthDate.getFullYear() !== year ||
    birthDate.getMonth() !== month - 1 ||
    birthDate.getDate() !== day
  ) {
    alert("Please enter a valid date.");
    return;
  }

  // Get day of week
  const dayOfWeek = birthDate.getDay();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  // Assign Akan name
  let akanName;

  if (gender.value === "male") {
    akanName = maleNames[dayOfWeek];
  } else {
    akanName = femaleNames[dayOfWeek];
  }

  // Display result
  document.getElementById("result").innerHTML = `
    <strong>You were born on ${days[dayOfWeek]}.</strong><br>
    Your Akan name is <span style="color:green; font-size:22px;">${akanName}</span>.
  `;
}

