//Normal function

const square = function(x){
  return x*x;
}
console.log(square(3));

//Arrow function
const squareArrow =(x) =>{return x*x;}
console.log(squareArrow(3));

const square3 =(x) => /*No return word here(direct expression)*/  x*x
console.log(square3(3));

//Arrow functions as property for methods
const event ={
    name:'Birthday',
    guestList:['Maulik','John','Harry'],
    printGuestList() {
        console.log("Guest list for "+this.name);
        this.guestList.forEach((guest) =>{
            console.log(guest+" is attending "+this.name);
            
        })
    }
}
//arrow function cant use their own this keyword so it will show undefined (Guest list for undefined)
//But they can use this keyword of the method in which they are used.
event.printGuestList()
