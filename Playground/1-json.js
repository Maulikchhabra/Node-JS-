const fs =require('fs')

const book={
    title:'Ego is the enemy',
    author:'Ryan Holiday'
}

const bookJSON=JSON.stringify(book)
console.log(bookJSON);

//we cant directy use something such as bookJSON.title or bookJSON.author cause bookJSON is not treated as object here.
//For doing that we have to use parse object.
const parseData=JSON.parse(bookJSON)
console.log(parseData);
console.log(parseData.author);
console.log(parseData.title);

fs.writeFileSync('1-json.json',bookJSON)
const dataBuffer =fs.readFileSync('1-json.json')
console.log(dataBuffer);
//console.log(dataBuffer.toString());
const dataJSON = dataBuffer.toString()
console.log(dataJSON);
const data =JSON.parse(dataJSON)
console.log(data.title);
console.log(data.author);


//Challenge 6
 //Paste this data in json file for this challenge
 /*
  Data ={"name":"Andrew","planet":"Earth","age":27}
Code =
 const dataBuffer1 = fs.readFileSync('1-json.json')
 const dataJSON1 = dataBuffer1.toString()
 const user =JSON.parse(dataJSON1)
 user.name="Gunther"
 user.age = 54
 const userJSON = JSON.stringify(user)
 fs.writeFileSync('1-json.json',userJSON)

 //Challenge completed*/