// Assigns Profile Box Tag to ProfileBox constant (variable)
const profileBox = document.getElementById('profile-box');
// Assigns button Tag to magicBtn constant (variable)
const magicBtn = document.getElementById('magicBtn');
// creates varialbe to store "Welcome Message";
let message = document.getElementById('welcome');
// Asks user for input which is stored in Name variable
var name = prompt("What's your name?");
// Creates a Date Object with current Date
let date = new Date();
// Object with weekdays assigned to numbers in order to them later to create "welcome message"
const weekday = {
  0 : 'Sunday',
  1 : 'Monday',
  2 : 'Tuesday',
  3 : 'Wednesday',
  4 : 'Thursday',
  5 : 'Friday',
  6 : 'Saturday'
};

// Adds event handler (click) for magicBtn (toggle button)

magicBtn.addEventListener("click", function() {
  // Toggles the css class that rotates the profile box in 3D
  profileBox.classList.toggle("profile-box-move");
});

// profileBox.addEventListener("click", function() {
//   this.classList.toggle("profile-box-move");
// });


function greeting() {
  let day = date.getDay();
  // if input value is null, undefined or an empty string
  if (name == null || name == undefined || name == '' || name == 'null') {
    message.textContent = 'Welcome! ';
  } else {
    // Otherwise use user input
    message.textContent += `Welcome ${name}! `
  }
  // Add this to the Welcome Message with the current day using the weekday Object
  message.textContent += `Today is ${weekday[day]}!`;
}

// logs the date to the console
console.log(date)
// call the greeting function so it will "run"
greeting();
