//Challenge 7
 //Paste this data in json file for this challenge
 /*
  Data ={"name":"Andrew","planet":"Earth","age":27}
Code =*/
 const fs =require('fs')
 const dataBuffer1 = fs.readFileSync('1-json.json')
 const dataJSON1 = dataBuffer1.toString()
 const user =JSON.parse(dataJSON1)
 user.name="Gunther"
 user.age = 54
 const userJSON = JSON.stringify(user)
 fs.writeFileSync('1-json.json',userJSON)
 //Challenge completed
