// Objects are collections of key-value pairs. They are used to store and organize data in a structured way. In JavaScript, objects can be created using curly braces {} and can contain properties and methods.
//Object literals are a convenient way to create objects in JavaScript. They allow you to define an object and its properties in a single expression. The syntax for an object literal is as follows:
const mySymbol = Symbol("mySymbol");

const obj = {
    name: "John",
    "full name": "John Doe",
    [mySymbol]: "This is a symbol property",
    age: 30,
    city: "New York"
    
}

//How to access object properties

console.log(obj.name);
console.log(obj["full name"]);
console.log(obj["age"]);
console.log(obj[mySymbol]);
