setTimeout(()=>{
   console.log("2 seconds");
   
},2000)

const names =['Maulik','john','smith','alex','light','kira']
const shortNames =names.filter((name)=>{
    return name.length <= 4
})

/*
const geoCode =(address, callback) =>{
   const data ={
       latitude:0,
       longitude:0
   }
   return data
}

const data=geoCode('India')
console.log(data);
*/

const geoCode =(address, callback) =>{
    setTimeout(()=>{
        const data ={
            latitude:0,
            longitude:0
        }
        callback(data)
    },2000)   
 }

geoCode('India',(data)=>{
 console.log(data);
}) 

//Challenge Callback
const add =(a,b,callback)=>{
    setTimeout(()=>{
      callback(a+b)
    },2000)
}

add(1,4,(sum)=>{
    console.log(sum);    
})
//Challenge completed

const doWorkCallback = (callback) =>{
    setTimeout(()=>{
       //callback("This is error!", undefined)   when things went wrong
       callback(undefined,[1,4,7])  //when things went well
    },2000)
}

doWorkCallback((error,result) =>{
    if(error){
        return console.log(error);
    }

    console.log(result);
})
