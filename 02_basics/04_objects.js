//singleton object
//const tinderUser=new Object() // object constructor

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="ayushpal"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    emaiil:"some@gmail.com",
    fullname:{
        userfullname:{
            first:"ayush",  
            last:"pal"
        }
    }
}
// console.log(regularUser.fullname.userfullname.first);
// console.log(regularUser.fullname.userfullname.last);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3=Object.assign({},obj1,obj2) // assign method is used to merge two or more objects into a single object 
//  console.log(obj3);

  const obj4={...obj1,...obj2}
  console.log(obj4);
  const users=[
    {
        id:1,
        name:"ayush"
    },
     {
        id:1,
        name:"ayush"
    },
     {
        id:1,
        name:"ayush"
    },
     {
        id:1,
        name:"ayush"
    }
  ]
  
  users[1].name
  console.log(tinderUser);
  console.log(Object.keys(tinderUser)); // keys method is used to get the keys of an object in an array
   console.log(Object.values(tinderUser)); 
    console.log(Object.entries(tinderUser)); // entries method is used to get the key-value pairs of an object in an array of arrays