const request = require('request')

/*
const forecast =(lat, long, callback)=>{
    const url1 ='https://api.darksky.net/forecast/1cfa8494916eb140e6d9266d0a6082d6/'+lat+','+long

    request({url:url1, json:true },(error,response)=>{
        //console.log(error);
        if(error){
          callback('unable to connect to weather service!');
        }
        else if(response.body.error){
          callback("Unable to find location!"); 
        }
        else{
          callback(undefined, response.body.daily.data[0].summary + "It is currently "+response.body.currently.temperature +" degrees out. There is a "+response.body.currently.precipProbability+" % chance of rain.");
        }   
      })
}
*/
