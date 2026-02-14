const marvel_heroes = ["ironman","spiderman","thor"]
const dc_heroes=["superman","batman","flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

// const all_heroes=marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);
 const all_new_heroes=[...marvel_heroes,...dc_heroes] /* ye spread operator hai jo array ke elements ko alag
   alag kar deta hai aur ek new array bana deta hai aur isme 1 se jayda array add akr skte hai*/
    // console.log(all_new_heroes);

const another_array=[1,2,3,[1,2 ,3,4],[1,2,3,[1,6,7,[54]]]]    
const real_another_array= another_array.flat(Infinity) // flat method is used to flatten nested arrays
// console.log(real_another_array);




//data scrapping

console.log(Array.isArray("marvel_heroes")); // isArray method is used to check if the variable is an array or not
console.log(Array.from("Ayushpal"));
console.log(Array.from({"name":"Ayushpal"}));// from method is used to convert an array-like object into an array
//retur empty array if we can descibe which we want to convert into array key value pair me

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
