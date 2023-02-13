// Promise


// let promise = new Promise((fulfilled,notfullfilled)=> {
//     let num1 = 10;
//     let num2 = 5;
//     let sum = num1 + num2;
//     if(sum>24) {
//         fulfilled(sum);
//     } else {
//         notfullfilled(new Error("Promise not fullfilled"));
//     }
// });
// promise.then(()=>{
//     console.log("Promise was fulfiled")
// }).catch(()=>
// {
//     console.log("promise was not fulfilled")
// });

// function addTwoNumber(n1,n2){
//     let sum=0;
//     setTimeout(()=>{
//         console.log(n1+n2);
//         sum = n1 + n2;
//     },5000);
//     return sum;
// }
// console.log(addTwoNumber(2,3))



function addTwoNumber(n1,n2){
    return new Promise((fulfilled,notfulfilled)=>{
        setTimeout(()=>{
            console.log("inside settime out")
            fulfilled(n1+n2);
        },5000);
        });

}

addTwoNumber(10,5).then(()=>{
    console.log("promise was fulfilled")
}).catch(()=>{
    console.log("Promise was not fullfilled")
})