// Assignment code here


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

var pwdCriteria = {
  pwdLength: 0,
  pwdLowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],

  pwdUpperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],

  pwdNumber: [0,1,2,3,4,5,6,7,8,9],

  pwdSpecialCharacter: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "[", "}", "]", "\\",
  "|", ":", ";", "'", "<", ",", ">", ".", "?", "/", "\"", "`", "~"],
}

function generatePassword() {
  var result = "";
  var passwordLength = 0;
  var pwdUpperCase;
  var pwdLowerCase;
  var numbers;
  var specialChar;

  passwordLength = 0;
  pwdCriteria.pwdLength = 0;
  result = "";

  while (passwordLength < 8 | passwordLength > 128) {
    passwordLength = prompt("How many characters do you want your password to be? \nPassword must be between 8 and 128 characters.");

    
    }
    
  }
}
