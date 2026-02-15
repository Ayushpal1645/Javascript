
function SayMyName(){
console.log("a");
console.log("y");
console.log("u");
console.log("s");
console.log("h");
console.log("p");
console.log("a");
console.log("l");
}

// SayMyName() // function call

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
function addTwoNumbers(num1,num2){
    let result=num1+num2;
    return result; // return keyword is used to return a value from a function
    //return num1+num2; // we can also return the result directly without storing it in a variable
}
const result=addTwoNumbers(5,10);
// console.log(result); 

function loginUserMessage(username){
    if(!undefined){
        console.log("please enter a username");
        return
        
    }
    return `${username}  just logged in`
}
// console.log(loginUserMessage("ayushpal"));
// console.log(loginUserMessage());


function calculateCartPrice(...num1){// rest parameter is used to pass an indefinite number of arguments to a function as an array
    return num1 
}
console.log(calculateCartPrice(2,244,2323,23232));


const user={
    name:"ayushpal",
    price:181
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
    
}

// handleObject(user)

// we can also pass an object directly to the function without storing it in a variable
handleObject({
    name:"ayushpal",
    price:181
})

//array of functions

const myNewArray=[12,123,1,31,]

function myFunc(getArray){
    return getArray[1]
}
console.log(myFunc(myNewArray));
