//primitive data types

// 7 types: string,number,boolean,null,undefined,symbol,biginit

const score=100;
const scorValue=100.4;

const isloggedIn=false;
const outsidetemp= null;
let userEmail;

const id= Symbol("123");
const anotherID= Symbol("123");
 console.log(id===anotherID);


//non-primitive data types
//array,objects,functions

const heros=["shaktiman","naagraj","doga"];
let myobject={
    name:"ayush"
    ,age:22,
    hobbies:["coding","gaming"]
};
const myfunction=function(){
    console.log("hello ayuhs");
}