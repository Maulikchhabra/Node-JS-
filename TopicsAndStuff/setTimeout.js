console.log("Starting");

setTimeout(()=>{ 
    console.log("3");    //Output 1
    
},3000)

setTimeout(()=>{console.log("0");   //Output 2
},0)

console.log("Ending");
