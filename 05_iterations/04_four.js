const myobject={
    cpp: 'c plus plus',
    js: 'javascript',
    swift: 'swift by apple'

}
for(const key in myobject){
    console.log(`${key} for my object is ${myobject[key]}`);
    
}


const programming=["js","cpp","java","html"]

for(const key in programming){
    console.log(programming[key]);
    
}

// objects ke uper loop lagna hoto hum use karnege (for in).
// array ke uper loop lagna hoto hum use karnege (for of).