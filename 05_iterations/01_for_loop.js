

for(let index=0; index<5; index++){

    console.log("Hello World", index);
}


for(let i=0;i<10;i++){
    if(i===4){
        console.log("Breaking at i =", i);
        break; 
    }
    console.log(i);
}

for(let i=0;i<10;i++){
    if(i===4){
        console.log("Skipping at i =", i);
        continue; 
    }
    console.log(i);
}