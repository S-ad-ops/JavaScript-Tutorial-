//Primitive => 7 types : 
// String , Number, Boolean, null, undefined, Symbol,Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

//Refrence (Non-Primitive )
//Array, Objects, Functions   
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3   
//typeof operator result of null is object 

//MEMORY 

//Stack => Primitive , Heap => Non-primitive 
//STACK 
let name = "dypiu"

let user = name 
console.log(user);

user = "dypcoe"
console.log(user);

//HEAP
let one = {
    email: "00101@yahoo.com",
    upi :"user@ypl"
}
let usertwo = one
