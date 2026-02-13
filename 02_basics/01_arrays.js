//Arrays
const myArray = [1, 2, 3, 4, 5];
const myArray2 = ["ayush","pal","apps"];

const array= new Array(1,2,3,4,5);
// console.log(myArray[3]);
// console.log(myArray2[2]);
// console.log(array);

//Array methods

//  myArray.push(6);//adds an element to the end of the array
//  myArray.push(7);
//  myArray.pop();//removes the last element from the array

// myArray.unshift(9);//adds an element to the beginning of the array
// myArray.shift();//removes the first element from the array

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));

// const newArray=myArray.join();//converts the array to a string


//     console.log(myArray);
//     console.log(newArray);
    
//     console.log(typeof newArray);
    

// slice, splice
console.log("A ",myArray);

const myn1= myArray.slice(1,3);// isme 1 se start hoga aur 3 se pehle tk jayega yani 1 aur 2 ko le lega isme original array change nhi hota hai
console.log("B ",myn1);

const myn2=myArray.splice(1,3);// isme 1 se start hoga aur 3 element ko remove karega yani 1,2,3 ko remove karega
console.log("C ",myArray);
console.log("D ",myn2);
