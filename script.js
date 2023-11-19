// Array of special characters to be included in password
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
  var charnum = prompt('How many charecters would you like in you prassword?')
    if (charnum < 8 && charnum > 128) {
      alert("Please enter a lenght of password betweeen 8 and 128 characters.")
      generatePassword()
    }
  
    let newarray = []
  var Lowercasetrue = confirm('Would you like lowercase in your password?')
    if (Lowercasetrue === true) {
      newarray = newarray + newarray.concat(Lowercasetrue)
    }
  var Uppercasetrue = confirm('Would you like uppercase in your password?')
  if (Uppercasetrue === true) {
    newarray = newarray + newarray.concat(Uppercasetrue)
  }
  var Numerictrue = confirm('Would you like numbers in your password?')
  if (Numerictrue === true) {
    newarray = newarray + newarray.concat(Numerictrue)
  }
  var Specialtrue = confirm('Would you like special charecters in your password?')
  if (Specialtrue === true) {
    newarray = newarray + newarray.concat(Specialtrue)
  }

console.log(newarray)
  let randompassword = ''
    for(let i = 0; i < charnum; i++) {
    var randomindex = Math.floor(Math.random()*charnum)
    console.log(randomindex)
    randompassword = randompassword + newarray[randomindex]
    console.log(randompassword)
    } 
    return randompassword
}


//Length of password
// At least 8 characters but no more than 128.
// Character types
// Lowercase
// Uppercase
// Numeric
// Special characters ($@%&*, etc)

  //return passwork criteria that the user chose base on prompts

// Function for getting a random element from an array
function getRandom(arr) {


  //get a random number in the range of the lenght of the array to serve as the index of the array
  //return the array at that random number
}

// Function to generate password with user input

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

