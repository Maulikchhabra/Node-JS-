//Validator package
//Validator package simply validates on the data passed in it as email or URL.
const validator =require('validator') //Importing validator package
console.log(validator.isEmail('maulik@example.com')); //using isEmail method verify (will return true)
console.log(validator.isEmail('maulik'));             //      ||   (will return false)  
console.log(validator.isURL('https://www.github.com')); //using isURL method verify  (will return true)
