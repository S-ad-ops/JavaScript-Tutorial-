console.log(2 > 1);
//valid as both the values are number 

    //but 
console.log("2" > 1);
//here it automatically converts string to number and compare 
//but make sure while comparision data types are same 

//to be avoided mostly ===>
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >=0);

// ===(strict check)=> strictly checks datatypes and does not allow conversion 
console.log(2 === "2");
