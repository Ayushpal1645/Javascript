const userEmail= "ayushpal@.glbitm.edu.in";

if(userEmail){
    console.log("You have an email");
}
else{
    console.log("Please provide an email");
}

//falsy values in js
// 1. false
// 2. 0
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN
//7.BigInt(0n)

//truthy values in js
// 1. true
// 2. any number other than 0
// 3. any string other than "" (empty string) "0", "false" etc are all truthy values
// 4. any object
// 5. any array
// 6. any function
// 7. BigInt(any number other than 0n)
// 8. Symbol()

const user1Email= "";

if(user1Email.length ===  0){
    console.log("Array is an empty");

}

const emptyobject = {};
if(Object.keys(emptyobject).length === 0){
    console.log("Object is an empty");
}


// Nullish coalescing operator (??) : null undefined hone par default value provide karta hai, agar left-hand side operand null ya undefined hai to right-hand side operand return hota hai, otherwise left-hand side operand return hota hai.
//  is used to provide a default value when the left-hand side operand is null or undefined. It returns the right-

let val1;
val1= 5??10; // 5
val1= null??10; // 10
val1= undefined??10;// 10
val1= 0??10;// 0