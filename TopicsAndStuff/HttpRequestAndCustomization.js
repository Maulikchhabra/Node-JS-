const chalk = require('chalk')
const request =require('request')
const geoCode = require('./utils/geoCode')
const forecast =require('./utils/forecast')


//HTTP request (Whole information)
 const request =require('request')
 const url ='https://api.darksky.net/forecast/1cfa8494916eb140e6d9266d0a6082d6/37.8267,-122.4233'
 request({url:url},(error,response)=>{
   console.log(response);
    })

//HTTP request (Not whole information)    
 request({url:url},(error,response)=>{
   const data =JSON.parse(response.body)
   console.log(data);
 })    

//Customize the HTTP request
 // 1 UNITS CUSTOMIZING

 //const url ='https://api.darksky.net/forecast/1cfa8494916eb140e6d9266d0a6082d6/37.8267,-122.4233?units=si'
 
 /*
 request({url:url, json:true },(error,response)=>{
   console.log(response.body.currently);
   
 })

 
 // 2 LANGUAGE CUSTOMIZING
 
 const url ='https://api.darksky.net/forecast/1cfa8494916eb140e6d9266d0a6082d6/37.8267,-122.4233?lang=hi'
 request({url:url, json:true },(error,response)=>{
   console.log(response.body.currently);
   
   

//3 Using both UNITS and LANGUAGES
const url ='https://api.darksky.net/forecast/1cfa8494916eb140e6d9266d0a6082d6/37.8267,-122.4233?lang=hi&unit=si'
request({url:url, json:true },(error,response)=>{
  console.log(response.body.currently);  




Changing units involve using units in the URL like =

const url ='https://api.darksky.net/forecast/1cfa8494916eb140e6d9266d0a6082d6/37.8267,-122.4233?units=si'
will provide data in SI units 

const url ='https://api.darksky.net/forecast/1cfa8494916eb140e6d9266d0a6082d6/37.8267,-122.4233?units=us'
will provide data in imperial units 
*/
