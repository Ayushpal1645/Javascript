//primitive data types

// 7 types: string,number,boolean,null,undefined,symbol,biginit

const score=100;
const scorValue=100.4;

const isloggedIn=false;
const outsidetemp= null;
let userEmail;

const id= Symbol("123");
const anotherID= Symbol("123");
 //console.log(id===anotherID);


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



// *******************************************************************

// Stack(primitve) and Heap(non-primitive)

let myYoutubename="ayush";
let anothername=myYoutubename;
anothername="pal";
console.log(myYoutubename);//ayush

let user1={
    email:"ayush@gmail.com",
    upi:"ayush@okhdfc"

}
let user2=user1;
user2.email="pal@gmail.com"
console.log(user1.email);