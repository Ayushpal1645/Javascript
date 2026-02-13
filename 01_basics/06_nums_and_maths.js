const score=400;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNUm= 123.8924;


console.log(otherNUm.toPrecision(3)); //toPrecision() method formats a number to a specified length, rounding if necessary.
//  It returns a string representation of the number with the specified number of significant digits.

const num1= 10000000;
console.log(num1.toLocaleString('en-IN'));



//***************************************MATHS******************************************************* */


console.log(Math);
console.log(Math.abs(-4)); //absolute value
console.log(Math.round(4.6));
console.log(Math.ceil(4.1)); //rounds up
console.log(Math.floor(4.9));//rounds down
console.log(Math.min(4,5,6,7));//returns the smallest number
console.log(Math.max(4,5,6,7));//returns the largest number

console.log(Math.random());//returns a random number between 0 and 1
console.log((Math.random()*10)+1);//returns a random number between 1 and 10

min=10;
max=20;
console.log(Math.floor(Math.random()*(max-min+1)+min)); //returns a random number between min and max