const myarr = [1, 2, 3, "Soham", true, null, undefined];

console.log(myarr[6]);

myarr.push("New Element");//adds new element at the end of the array
myarr.pop();//removes the last element of the array
myarr.unshift("First Element");//adds new element at the beginning of the array
myarr.shift();//removes the first element of the array

console.log(myarr.includes(4));    //returns true if the array contains the specified element, and false otherwise.
console.log(myarr.indexOf(3));//returns the index of the first occurrence of the specified element in the array, or -1 if it is not found.


//SLICE AND SPLICE
const arr1 = [1, 2, 3, 4, 5];
const slicedArr = arr1.slice(1, 4);
console.log(slicedArr); // Output: [2, 3, 4]
const arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 1, "New Element");
console.log(arr2); // Output: [1, 2, "New Element", 4, 5]
