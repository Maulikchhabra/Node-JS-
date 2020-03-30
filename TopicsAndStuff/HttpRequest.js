

/*
HTTP request (Whole information)
 const request =require('request')
 const url ='https://api.darksky.net/forecast/1cfa8494916eb140e6d9266d0a6082d6/37.8267,-122.4233'
 request({url:url},(error,response)=>{
   console.log(response);
    })

HTTP request (Not whole information)    
 request({url:url},(error,response)=>{
   const data =JSON.parse(response.body)
   console.log(data);
 })    
*/

