// for of
// ["","","",""]
// [{},{},{}]

const arr = [1,2,3,4,5];

for (const num of arr){
    // console.log(num);
}

const greetings ="heelo world";

for(const greet of greetings){
    // console.log(greet);
    
}


const map= new Map();
map.set('IN',"India");
map.set('US',"United States");
map.set('UK',"United Kingdom");
map.set('FR',"France");

for(const [key,value] of map){
    console.log(key,":-", value);
}

const myObject={// object is not iterable but we can use Object.entries to make it iterable
    name:"John",
    age:30,
    city:"New York"
};
for(const [key,value] of Object.entries(myObject)){
    console.log(key,":-", value);
}