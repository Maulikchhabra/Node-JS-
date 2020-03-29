//Challenge for HTTP requesting and customization
request({url:url, json:true },(error,response)=>{
  //console.log(error);
  if(error){
    console.log(chalk.red.inverse("unable to connect to weather service!"));
  }else if(response.body.error){
    console.log(chalk.red.inverse("Unable to find location!")); 
  }
  else{
    console.log(response.body.daily.data[0].summary + "It is currently "+response.body.currently.temperature +" degrees out. There is a "+response.body.currently.precipProbability+" % chance of rain.");
  }   
})
//Challenge completed
