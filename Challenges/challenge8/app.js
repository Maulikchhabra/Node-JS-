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
