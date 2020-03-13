setTimeout(()=>{
   console.log("2 seconds");
   
},2000)

const names =['Maulik','john','smith','alex','light','kira']
const shortNames =names.filter((name)=>{
    return name.length <= 4
})
