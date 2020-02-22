//create list command
 yargs.command({
   command:'list',
   describe:'List the notes',
   handler(){notes.listNotes()
   }
 })   
 //console.log(yargs.argv);
 
 //create read command
 yargs.command({
   command:'read',
   describe:'Read the notes',
   builder:{
     title:{
            descbribe:'Note title',
            demandOption:true,
            type:'string' 
     }
   },
   handler(argv){notes.readNote(argv.title)
   }
 })
 console.log(yargs.argv);
//Challenge completed
