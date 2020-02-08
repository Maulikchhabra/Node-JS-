const fs =require('fs') //file system package

//Syntax =fs.writeFileSync('<file name>','<message to print in that file>')
fs.writeFileSync('notes.txt','My name is Maulik Chhabra') //writing in a file named notes.txt the message given alongside. 


//Challenge 1
fs.appendFileSync('notes.txt',' and I am a DevOps enthusiast')
//Challenge completed
