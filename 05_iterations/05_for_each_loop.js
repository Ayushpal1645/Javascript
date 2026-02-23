const programming=["js","cpp","java","html"]

// programming.forEach(function (item){
//     console.log(item);
    
// })



// programming.forEach((item) => {
//     console.log(item);
    
// })

function printme(item){
    console.log(item);
}
programming.forEach(printme)


const mycoding=[
    {
        name:"javascript",
        filename:"js"
    },
    {
        name:"java",
        filename:"java"
    },
    {
        name:"python",
        filename:"py"
    }
]

mycoding.forEach((item)=> {
    console.log(item.name);
    
})