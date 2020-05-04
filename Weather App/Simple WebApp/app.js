const chalk = require('chalk')
const request =require('request')
const geoCode = require('./utils/geoCode')
const forecast =require('./utils/forecast')


const address =process.argv[2]

if(!address){
  console.log('Please provide an address!!');
}
else{
  geoCode(address,(error, {lat, long, location})=>{
    if(error){
      return console.log(error);
    }
   // console.log('Error:',error);
  //console.log('Data:',data);
    forecast(lat, long, (error, forecastData) => {
      if(error){
        return console.log(error);
      }
  
      //console.log('Error:', error)
      console.log('Data:', location);
      console.log(forecastData);
      
    })
  })
  
  /*
Before object destructuring

if(!address){
  console.log('Please provide an address!!');
}
else{
  geoCode(address,(error, data)=>{
    if(error){
      return console.log(error);
    }
   // console.log('Error:',error);
  //console.log('Data:',data);
    forecast(data.lat, data.long, (error, forecastData) => {
      if(error){
        return console.log(error);
      }
  
      //console.log('Error:', error)
      console.log('Data:', data.location);
      console.log(forecastData);
      
    })
  })
}
 */
//Challenge in forecast.js
//Challenge completed
}
