// Assignment Code
var generateBtn = document.querySelector("#generate");
const Allowed = {
  Uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
  Lowers: "qwertyuiopasdfghjklzxcvbnm",
  Numbers: "1234567890",
  Symbols: "!@#$%^&*"
}

// Write password to the #password input
writePassword = (e)=>{
  e.preventDefault();
 
  var passwordText = document.querySelector("#password");
  const options = {
    lower: document.getElementById("lower").checked,
    upper: document.getElementById("upper").checked,
    number: document.getElementById("number").checked,
    special: document.getElementById("special").checked,
    size: document.getElementById("size").checked?  (Math.floor(Math.random() * 25)+8) : 6
  }
  console.log(options);
  var password = generatePassword(options);
  passwordText.value = password;

}
function shuffleString(s) {
  var arr = s.split('');           // Convert String to array
  
  arr.sort(function() {
    return 0.5 - Math.random();
  });  
  s = arr.join('');                // Convert Array to string
  return s;                        // Return shuffled string
}

const getRandomCharFromString = (str) => str.charAt(Math.floor(Math.random() * str.length))
const generatePassword = (options) => {
  let length = options.size;
  let pass = "";
  if (options.upper) {
    pass += getRandomCharFromString(Allowed.Uppers); //pass will have at least one upper  
  }
  if (options.lower) {
    pass += getRandomCharFromString(Allowed.Lowers); //pass will have at least one lower
  }
  if (options.number) {
    pass += getRandomCharFromString(Allowed.Numbers); //pass will have at least one number
  }
  if (options.special) {
    pass += getRandomCharFromString(Allowed.Symbols);//pass will have at least one symbol
  }
    for (let i = pass.length; i < length; i++)
        pass += getRandomCharFromString(Object.values(Allowed).join('')); //fill the rest of the pwd with random characters
  console.log(pass);
  return shuffleString(pass);
}



