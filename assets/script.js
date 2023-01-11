// password generator 

// 1. Prompt user for length when button is clicked.
//    a) (Prompt) Amount of characters for password to include. Length 8 - 128 charac (loop if condition not satisfied)
// 2. Prompt on what character type to add.
//    b) (Prompt) "Do you want your password to contain lowercase letters?"
//    c) (Prompt) "Do you want your password to contain uppercase letters?"
//    d) (Prompt) "Do you want your password to contain numeric characters?"
//    e) (Prompt) "Do you want your password to contain special characters?"
// Input should be validated and at least one character type should be selected (loop if none is selected)

// 3. With the arrays defined, concatenate the declare the variables.  
// 4. Password is then generated randomly and written in the page box.

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays for the possible values in password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "]"];

// variables
var withLowerCase;
var withUpperCase;
var withNumeric;
var withSpecial;

var passwordLength;

// call Function activates when button is clicked for writePassword()
function generatePassword() {
  //empty array for the password characters to be displayed. Variable resets as soon as the function is called again.
  var passwordGen = [];
  passwordLength = prompt("How many characters do you want your password to have? Length has to be between 8 to 128 characters.");
  console.log(passwordLength);

  // While loop until it satisfies the condition which is length of Password has to be between 8 - 128.
  while (!(passwordLength >= 8 && passwordLength <= 128)) {
    if (passwordLength === null) {
      return userPassword = "";
    }
    alert("Please make sure the password length is between 8 to 128 characters. Please retype the number!");

    passwordLength = prompt("How many characters do you want your password to have? Length has to be between 8 to 128 characters.");
  }
  alert("Your chosen password length will be: " + passwordLength + " [ If number is decimal it will be rounded ]");
  console.log("The password length is " + passwordLength)
  withLowerCase = confirm("Do you want your password to contain lowercase letters?");

  withUpperCase = confirm("Do you want your password to contain uppercase letters?");

  withNumeric = confirm("Do you want your password to contain numeric characters?");

  withSpecial = confirm("Do you want your password to contain special characters?");

  // while loop until it satisfies the condition: one criteria is needed. ok for yes and cancel for false
  while (withLowerCase !== true && withUpperCase !== true && withNumeric !== true && withSpecial !== true) {
    alert("Needs atleast one character criteria type");

    var withLowerCase = confirm("Do you want your password to contain lowercase letters? OK for yes");
    console.log(withLowerCase)

    var withUpperCase = confirm("Do you want your password to contain uppercase letters? OK for yes");
    console.log(withUpperCase)

    var withNumeric = confirm("Do you want your password to contain numeric characters? OK for yes");
    console.log(withNumeric)

    var withSpecial = confirm("Do you want your password to contain special characters? OK for yes");
    console.log(withSpecial)

  }

  if (withLowerCase) {
    passwordGen = passwordGen.concat(lowerCase);
  }

  if (withUpperCase) {
    passwordGen = passwordGen.concat(upperCase);
  }

  if (withNumeric) {
    passwordGen = passwordGen.concat(numeric);
  }

  if (withSpecial) {
    passwordGen = passwordGen.concat(special);
  }
  console.log(passwordGen);

  //var userpassword = "" to remove undefined in front of the password generated output
  var userPassword = "";

  //user password length and loops it that many times. Makes random password 
  for (var i = 0; i < passwordLength; i++) {
    var userPassword = userPassword + passwordGen[Math.floor(Math.random() * passwordGen.length)];
    console.log(userPassword);
  }
  return userPassword;
}


