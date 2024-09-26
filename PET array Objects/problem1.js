//. Push Multiple Elements
//Create an array of 2 colors. Use push() to add 2 more colors in one line and print the new array.

let colors=["red","Green"]
let first=colors.push("yellow","white")
console.log(colors)

//2. Shift Multiple Times
//Create an array of 5 fruits. Use shift() to remove the first two fruits, one by one, 
//and print the array after each removal.

let fruits=["grapes","banana","apple","mango","orange"]
let remove1=fruits.shift()
let remove2=fruits.shift()
console.log(fruits)

//3. Unshift with Multiple Arguments
//Write a program to create an array of 2 sports. Use unshift() to add 3 more sports to the beginning 
//in a single line and print the array.

let sports=["kabadi","cricket"]
let add=sports.unshift("volleyball","football","chess")
console.log(sports)



//. Find Non-Existing Element with indexOf()
//Write a program to find the index of "Laptop" in an array of 3 devices. Print the result.

let devices=["windows","keyboard","mouse","laptop"]
let a=devices.indexOf("laptop")
if(a === -1){
    console.log("laptop not in the array");
}
else{
    console.log("laptop in the array");
}




