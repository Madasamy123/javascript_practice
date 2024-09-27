


//Average of Scores
//Write a program to create an array of 5 exam scores. Calculate and print the average of the scores.
let scores=[10,20,30,40,50]
    let sum=0;
    let avg=0;
    for(let i=0;i<scores.length;i++){
     sum=sum+scores[i]
     avg=sum/scores.length

    }console.log(avg)




//Finding Maximum Score
//You have an array of test scores for 7 students. Write a program to find and print the highest score using 
//the Math.max() function along with the spread operator.

let score=[60,65,100,75,80,85,90]
let a=Math.max(...score)
    console.log(a)

//Number System Conversion
//Write a program that stores an array of 3 decimal numbers. Convert each number to its binary 
//equivalent using the toString(2) method and print the binary values.

let array=[15,10,12]
for(let i=0;i<array.length;i++){

let binary=array[i].toString(2);
console.log(binary)
}

//Boolean Algebra (AND Operation)
//Write a program that takes two arrays of Boolean values (e.g., [true, false, true] and [false, true, true]). 
//Perform an AND operation on corresponding elements from both arrays and store the result in a new array.
// Print the resulting array.

let m=[true,false,true]
let n=[false,true,true]
let p=[]
for(let i=0;i<m.length;i++){
let q=m[i]&&n[i]
p.push(q)
}
console.log(p)

//Percentage Increase in Prices
//Create an array of old prices for 4 items and another array with the new prices. 
//Write a program to calculate and print the percentage increase for each item.

let oldprices=[30,50,70,90]
let newprices=[50,70,90,110]


for(let i=0;i<oldprices.length;i++){
   
let first=newprices[i]-oldprices[i]
let second=(first/oldprices[i])*100
console.log(second)
}