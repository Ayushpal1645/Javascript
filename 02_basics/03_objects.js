//singleton object

// object literal
const mySem = Symbol("key1")
 const  JsUser={
    name:"ayushpal",
    "full name":"ayush pal",
    email:"ayush@gamil.com",
    age:24,
    location:"delhi",
    isloggedin:true,
    lastLogindays:["monday","tuesday","wednesday"],
    [mySem]:"mykey1"
 }

 console.log(JsUser.location);
 console.log(JsUser["email"]);
 console.log(JsUser["full name"]);
 console.log(JsUser[mySem]);
 console.log(typeof(mySem));

 JsUser.email="ayushchatgp@gmail.com"
 console.log(JsUser.email);
 //Object.freeze(JsUser) // freeze method is used to make the object immutable
 JsUser.email="ayushpalkmj@gmail.com"
 console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello js user");
}
JsUser.greetingtwo=function(){
    console.log(`hello js user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());

 
 
 
 
 