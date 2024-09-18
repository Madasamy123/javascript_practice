
//Combining shift() and unshift()
//Write a program to create an array of 3 items. Add a new item to the beginning using unshift(),
// then remove the first item using shift(). Print the updated array.

let country=["india","pak","aus"]
let a=country.unshift("newz");
console.log(a);
let b=country.shift("newz")
console.log(b);
console.log(country);
