//1 Object property shorthand

const name ="Maulik"
const userAge =19

const user={
    name:name,
    age:userAge,
    location:"Dehradun"
}
console.log(user);

const user1={
    name,  //you can directly call the properties in object which u declared before
    age:userAge,  //using in age is not possible as we dont have a declared variable age, rather we have userage variable
    location:"Dehradun"
}
console.log(user1);

//2 Object destructing

const product={
    label: 'red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}
