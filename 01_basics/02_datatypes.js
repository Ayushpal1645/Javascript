" use strict"; //treat all js code as newer version

// Data types
// 1. Primitive data types: number, string, boolean, null, undefined, symbol
// 2. Non-primitive data types: object, array, function
//alert(3+3); //we are using nodejs not browser, so we will use console.log instead of alert

console.log("Ayush"); //string

let name = "Ayush"; //string
let age = 20;
let isStudent = true; //boolean
let address = null;
let phone; //undefined
//null and undefined are different, null is an intentional absence of any value, 
// while undefined means a variable has been declared but not assigned a value

console.log(typeof name);
//symbol => A symbol is a unique and immutable primitive value that can be used as the key of an object property.
console.log(typeof null);