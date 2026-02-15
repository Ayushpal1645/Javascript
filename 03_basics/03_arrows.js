const user={
    username:"ayushpal",
    price:999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this );//
        
    }
}
// user.welcomemessage();
// user.username="aviator";
// user.welcomemessage();

console.log(this);// this keyword refers to the current object that is executing the 


// function chai(){
//     let username="ayushpal";
//     console.log(this.username);//this bss object ke ander use ho rha hai nake fuction ke ander
// }
// chai();



const chai = () =>{
    let username="ayushpal";
    console.log(this);// arrow function ke ander this keyword global object ko refer karta hai, isliye undefined aata hai
}


// const addtwo = (num1, num2) => {
//     return num1 + num2;

// }


// const addtwo = (num1, num2) =>   num1 + num2; //implicit return, jab function ke andar sirf ek expression ho to usko directly return kar sakte hai bina return keyword ke

// const addtwo = (num1, num2) =>   (num1 + num2);
 

const addtwo = (num1, num2) =>   ({username:"ayushpal", })
console.log(addtwo(5, 10)); 