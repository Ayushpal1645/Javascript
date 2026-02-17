const isuserLoggenIn = true; 
const temprature=41;
if(temprature<50){
    console.log("less than 50 ");
    
}
console.log("greater than 50 ");


// const isuserLoggenIn = true;
const googleUser = false;
if(isuserLoggenIn && googleUser){
    console.log("logged in with google");
}
else if(isuserLoggenIn){
    console.log("logged in with email and password");
}
else{
    console.log("not logged in");
}
