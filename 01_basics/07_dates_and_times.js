//Dates

let myDate = new Date();
// console.log(myDate.toString());   
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

// console.log (typeof myDate); //object


//let myCreatedDate= new Date(2026,2,14); //year, month, day
// let myCreatedDate= new Date(2026,2,14,5,3); //year, month, day, hours, minutes
let myCreatedDate= new Date("01-14-2026"); //month-day-year 

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp= Date.now();
// console.log(myTimeStamp); //returns the number of milliseconds since January 1, 1970, 00:00:00 U
// console.log(myCreatedDate.getTime());//returns the number of milliseconds since January 1, 1970, 00:00:00 UTC for the specified da

// console.log(Math.floor(Date.now()/1000));//returns the number of seconds since January 1, 1970, 00:00:00 U

let newDate= new Date();
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth());

newDate.toLocaleString('default', {
    weekday:'long',
    month:'long',
    day:'numeric',
    year:'numeric'
})