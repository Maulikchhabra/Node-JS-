const bcrypt = require('bcryptjs');

const myFunction =async ()=>{
   const password = 'Red12345!'
   const hashedPassword = await bcrypt.hash(password, 8);
   
   console.log(password); //password we stored
   console.log(hashedPassword); //hashed password stored in db
   //$2a$08$Lrtn5w5KDyH2xZcjuVDRDu3.Zq4v.IQTtWnSErCFHngEKPk7ukqL6 (hashedPassword generated)
   
   const isMatch = await bcrypt.compare(password,hashedPassword); //compares both password based on the hashing algorithms
   console.log(isMatch); //true
   
}

myFunction()

/**
 * Encryption and Decryption : maulik -> m@217yt#wa -> maulik (two sided)
 * 
 * Hashing algorithms : maulik -> @1q3#4rta!.Dvd12#uht%$csap (Single sided)
 * 
 * Becrypt uses Hashing algorithms for password security
 */
