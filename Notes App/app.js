const yargs =require('yargs')
//console.log(process.argv);
console.log(yargs.argv);
//By default if we do node app --version it will show 1.0.0
//To customize the version of yargs
yargs.version('1.1.0') //setting version to 1.1.0 from 1.0.0

//add ,remove,read,list commands in notes app

const notes =require('./notes.js')

 //create add command
 yargs.command({
   command:'add',
   descbribe:'Add new note',
   builder:{
     title:{
       describe:'Note title',
       demandOption: true,
       type:'string'
     },
     body:{
       describe:'Body of note',
       demandOption:true,
       type:'string'
     }
   },
   handler(argv){
      notes.addNote(argv.title,argv.body)
     }
 })
 //console.log(yargs.argv);

//create remove command
  yargs.command({
    command:'remove',
    describe:'Remove the note',
    builder:{
      title:{
        descbribe:'Note title',
        demandOption:true,
        type:'string'
      }  
    },
    handler(argv){
      notes.removeNote(argv.title)
    }
  })
  //console.log(yargs.argv);

//create list command
 yargs.command({
   command:'list',
   describe:'List the notes',
   handler(){notes.listNotes()
   }
 })   
 //console.log(yargs.argv);
