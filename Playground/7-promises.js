const doWorkPromise = new Promise( (resolve,reject)=>{
    setTimeout(()=>{
        //resolve([1,7,10]);  when things went well
        reject("Things went wrong!");  //when things went wrong
    },2000)
} )

doWorkPromise.then((result)=>{

    console.log("Success!",result);

}).catch((error)=>{
    
    console.log("Error!",error);
    
})

/* WORKFLOW =>

 *                          fulfilled (resolve)
 *                        /
 * Promise --> pending -->
 *                        \
 *                          rejected (reject)
 * 
 */


const add =(a,b)=>{
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             resolve(a+b);
         },2000)
     })
}


//Without promise Chaining syntax, the code will get on nesting the add calls
add(1,2).then((sum)=>{

    console.log(sum);
    
    add(sum,5).then((sum2)=>{
        console.log(sum2);
        
    }).catch((e)=>{
        console.log(e);
        
    })
}).catch((e)=>{
    console.log(e);
    
})

//Promise Chaining Syntax Type

add(1,1).then((sum)=>{  //then call 1
    console.log(sum);
    
    return add(sum,4); //returning the add promise 

}).then((sum2)=>{      //then call 2
    console.log(sum2);
    
}).catch((e)=>{
    console.log(e);
    
})
