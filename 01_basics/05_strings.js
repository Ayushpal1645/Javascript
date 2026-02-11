const name="ayush";
const repocount=100;
console.log(name+ repocount+" value");

console.log(` hello my name is ${name} and my repo count is ${repocount}`) // string interpolation

 const gamename= new String('ayush');
    console.log(gamename);
    console.log(gamename[0]);
    console.log(gamename.length);
    console.log(gamename.toUpperCase());
    console.log(gamename.charAt('2'));
    console.log(gamename.indexOf('h'));

    //slicing
    const newstring=gamename.substring(0,4);
    console.log(newstring);
    const anotherstring=gamename.slice(-5,4);
    console.log(anotherstring);

    const newstringone="     ayush   ";
    console.log(newstringone);
    console.log(newstringone.trim());


    const url="https://www.ayushpal/profile%20pal";
    console.log(url.replace("%20","-"));

    console.log(url.includes("ayush"));

    const myschool="ayush-pal-apps-kmj";
    
    console.log(myschool.split("-"));