var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function generatePassword() {
  var charnum = prompt('How many charecters would you like in you prassword? Please choose a number between 8 and 128.')
  if (!(/^\d+$/.test(charnum))) {
    alert("Please enter a valid number")
    return generatePassword()   
  }
  if ( charnum < 8 || charnum > 128) {
    alert("Please enter length of password betweeen 8 and 128 characters.")
    return generatePassword()
  }

  //Creating new array with characters that are selected
  let newarray = []
  var Lowercasetrue = confirm('Would you like lowercase in your password?')
  if (Lowercasetrue === true) {
    newarray = newarray.concat(lowerCasedCharacters)
  }
  var Uppercasetrue = confirm('Would you like uppercase in your password?')
  if (Uppercasetrue === true) {
    newarray = newarray.concat(upperCasedCharacters)
  }
  var Numerictrue = confirm('Would you like numbers in your password?')
  if (Numerictrue === true) {
    newarray = newarray.concat(numericCharacters)
  }
  var Specialtrue = confirm('Would you like special charecters in your password?')
  if (Specialtrue === true) {
    newarray = newarray.concat(specialCharacters)
  }
  if (!Lowercasetrue && !Uppercasetrue && !Numerictrue && !Specialtrue) {
    alert('Please select at least on character type')
    return generatePassword();
  }
  //Generating a new password from new array that is created from selections
  let randompassword = ''
  for (let i = 0; i < charnum; i++) {
    var randomindex = Math.floor(Math.random() * newarray.length)
    randompassword = randompassword + newarray[randomindex]
  }
  return randompassword
}

var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

