const jwt =require('jsonwebtoken');

const myFun = async ()=>{
    const token =jwt.sign({_id: '123'}, 'thisismynewcourse', { expiresIn: '7 days'})
    console.log(token);
    
    const data =jwt.verify(token, 'thisismynewcourse')
    console.log(data);
    
}

myFun()
