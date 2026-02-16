// Immediately invoked function expression (IIFE


(function chai(){
    console.log(`Db connected`);//global scopeke polltion se bachne ke liye IIFE ka use karte hai, isse hum apne code ko ek function ke andar wrap kar dete hai jisse global scope me koi variable ya function pollute nahi hota hai
    
})();



( () => {
    console.log(`Db connected`);
})();



( (name) => {
    console.log(`Db connected ${name}`);
})("ayush")

