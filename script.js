
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

function generateAkanName(event) {
  event.preventDefault();

  // Get input values
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  const gender = document.querySelector('input[name="gender"]:checked');

  // Check if all fields are filled
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

  // Validate year
  const currentYear = new Date().getFullYear();

  if (year < 1900 || year > currentYear) {
    alert(`Please enter a valid year between 1900 and ${currentYear}.`);
    return;
  }

  // Check if the date actually exists
  const birthDate = new Date(year, month - 1, day);

  if (
    birthDate.getFullYear() !== year ||
    birthDate.getMonth() !== month - 1 ||
    birthDate.getDate() !== day
  ) {
    alert("Please enter a valid date.");
    return;
  }

  // Get day of the week (0 = Sunday, 6 = Saturday)
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

  // Select Akan name
  let akanName = "";

  if (gender.value === "male") {
    akanName = maleNames[dayOfWeek];
  } else {
    akanName = femaleNames[dayOfWeek];
  }

  // Display the result
  document.getElementById("result").innerHTML = `
    <h3>🎉 Your Result</h3>
    <p><strong>Birth Date:</strong> ${day}/${month}/${year}</p>
    <p><strong>Day of the Week:</strong> ${days[dayOfWeek]}</p>
    <p><strong>Your Akan Name:</strong> <span style="color:green; font-size:24px;">${akanName}</span></p>
  `;
}