let a=300 
if(true){
    let a = 10;
    const b = 20;
    console.log("Inner: ",a);
    
}

console.log(a);
// console.log(b);


function one(){
    const username="ayuhspal";

    function two(){
        const website="youtube";
        console.log(username);
         }
        //  console.log(website);
         
         two();
}
// one();

if(true){
    const username="ayushpal";
    if(username==="ayushpal"){
        const website=" youtube";
        console.log(username + website);  
    }
    // console.log(website);
    
}
// console.log(username);




//************************************intersting***************** */

function addone(num1){// function declaration
    return num1+1;
}
console.log(addone(5));

const addtwo= function(num1)// function expression
{
    return num1+2;
}
addtwo(5);