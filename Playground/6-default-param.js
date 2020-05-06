const greeter =(name)=>{
    console.log("Hello "+name);
    
}

greeter("Maulik")

greeter() //no value is passed so output would be Hello undefined

//New Solution is :

const greeterNew =(name ="user",age)=>{
    console.log("Hello "+name);
    
}

greeterNew("Maulik")

greeterNew() //output would be Hello user as user is the default parameter for the function
