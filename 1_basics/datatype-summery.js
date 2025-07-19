//  Primitive

// 7 types : String, Number, Boolean, null, Undefined, Symbol(making value unique), BigInt, 

const score = 100
const scoreValue= 100.3

const isLoggedIn= false
const outsideTemp= null
let userEmail;

const id= Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);



// Reference type(Non premitive)

// Array, Objects, Functions


const heros=["shaktiman", "nagaraj"];

let myObj={
    name:"nandan",
    age:22,
}

const myFunction= function(){
    console.log("Hello world");
}

const bigInt=123456n;
console.log(typeof bigInt)