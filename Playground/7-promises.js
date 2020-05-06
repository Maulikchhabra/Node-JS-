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
