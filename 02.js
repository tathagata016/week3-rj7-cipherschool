//1 .map()

// let array=[1,2,3,4,5];
// let newArray=[];

// for(let i=0;i<array.length;i++){
// newArray[i]=array[i]+array[i];
// }

// console.log(newArray);

// let array=[5,10,15,20];

// function functionForMap(element){
//     return element*element;
// }
// let newArray=array.map(functionForMap);
// console.log(newArray);

//2. forEach
// let array=[1,2,3,4,5,];
// array.forEach((element,index)=>{
//     element*=element;
//     console.log(element);
// });

// console.log("Array is:",array);

//3. filter()
// let array=[10,20,30,40,50];
// let newArray=array.filter((element)=>{
// return element>=30;
// });

// console.log(newArray);

//4. .sort()

// let array=[50,40,111,30,20,10];
// let sortedArray=array.sort((el1,el2)=>{
// el1=Number(el1);
// el2=Number(el2);
//     return el1-el2;
// });
// console.log(sortedArray);

//Object Destructuring

// let details={
//     name:"Alex",
//     age:24,
//     address:{
//         city:"New York",
//         state:"NY",
//         country:"USA",
//         passportDetail:{
//             passportNumber:"AY57756",
//         },
//     },
// }

// let{name:myName,age}=details;
// console.log(myName,age);



// object matching

// let obj1={name:"tathagata"}
// let obj2={name:"tathagata"}

// function equal(obj1,obj2){
//     if(obj1===obj2){
//         return true;
//     }
//     if(Object.keys(obj1).length != Object.keys(obj2).length){
//         return false;
//     }
//     for(let key of Object.keys(obj1)){
//         if(typeof obj2[key === "undefined"]){
//             return false
//         }
//         if(obj2[key]!==obj1[key]){
//                 return false;
//         }

//     }
//     return true;
// }
// console.log(equal(obj1,obj2))


// Map and set 

// let map = new Map();
// map.set(1,"tathagata");
// map.set(2,"Alex")
// console.log();
// map.entries()
// map.has()
// map.keys()
// map.values()


// let set  = new Set();
// set.add(1)
// set.add(-1)
// set.size()
// set.has()
// set.delete()






//class
class Animal{
    noOflegs;
    color;

    constructor(noOflegs,color){
        this.noOflegs=noOflegs;
        this.color=color;
    }
    showAnimal() {
        console.log(`animal color     ${this.color}`)
    }
}
let animal = new Animal(4,"red")
console.log(animal.showAnimal())