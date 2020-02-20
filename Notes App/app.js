const yargs =require('yargs')
//console.log(process.argv);
console.log(yargs.argv);
//By default if we do node app --version it will show 1.0.0
//To customize the version of yargs
yargs.version('1.1.0') //setting version to 1.1.0 from 1.0.0

//add ,remove,read,list commands in notes app

const notes =require('./notes.js')

 
