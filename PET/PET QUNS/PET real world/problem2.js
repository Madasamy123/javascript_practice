//Set Theory (Union of Two Sets)
//Write a program that takes two arrays of numbers representing two sets.
// Create a new array that represents the union of both sets (without duplicates) and print the result.

let first=[1,2,3,4,5]
let second=[3,4,5,6,7]
function union(first, second){
    let us = new Set([...first, ...second]);
    return Array.from(us);
}
let result = union(first, second);
console.log(result)


//Finding the Mode (Most Frequent Element)
//Write a program to find and print the mode (the number having the highest count) in an array of 10 numbers. 
//If there are multiple modes, print any one of them.

let array=[10,20,30,40,10,30,40,10,60,80]

let a={};
let highestCount=0;
let b;
for(let i=0;i<array.length;i++){
    let num= array[i];
    a[num]=(a[num]||0)+1;
    if(a[num]>highestCount){
        highestCount=a[num];
        b=num;
    }
}
console.log(b)








//Modulus Operation for Time Calculation
//Create an array of times (in minutes) that different tasks take to complete. Write a program to find out 
//how many full hours and leftover minutes each task takes using modulus (%) and division (/) operators, and save
// the result in the same array. Print the array.

function timeCalculation(){
    let times=[80,50,130,90,108];
    for(let i=0;i<times.length;i++){
        let a=times.shift();
        let b=a%60;
        let c=Math.trunc(a%60);
        let z=`${c}hr ${b}min`;
            times.push(z);
        
    }
    console.log(times);
}
timeCalculation();




//Simple Interest Calculation
//Create an array of 10 objects with keys principal, rateOfInterest and noOfYears. Find the simple interest for each array object and store it in a new array. 
//Print this array.
//For example: 
//details = [
//{ principal : 10000, rateOfInterest : 5, noOfYears: 4},
//{ principal : 15000, rateOfInterest : 4, noOfYears: 3},
//]
//Output:
//[ 2000, 1800 ]

let simpleInterest=[
    {principal:10000,rateOfInterest: 5,noOfYears:4},
    {principal:10000,rateOfInterest: 6,noOfYears:3},
    {principal:10000,rateOfInterest: 7,noOfYears:4},
    {principal:10000,rateOfInterest: 8,noOfYears:3},
    {principal:10000,rateOfInterest: 9,noOfYears:4},
    {principal:10000,rateOfInterest: 8,noOfYears:2},
    {principal:10000,rateOfInterest: 7,noOfYears:4},
    {principal:10000,rateOfInterest: 6,noOfYears:2},
    {principal:10000,rateOfInterest: 5,noOfYears:4},
    {principal:10000,rateOfInterest: 4,noOfYears:5},

    

]
for(let i=0;i<simpleInterest.length;i++){
    let a=(simpleInterest[i].principal*simpleInterest[i].rateOfInterest*simpleInterest[i].noOfYears)/100
    console.log(a)
}


//Calculating Total Marks of Students 
//You have an array of 10 objects, each representing a student with keys subject1Marks, subject2Marks, and subject3Marks.
// Write a program to calculate the total marks for each student and store them in a new array. Print the new array.
//Example:
//students = [
//{ subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
//{ subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
//]
//Output:
//[ 240, 175 ]

let students = [
    { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
    { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
    { subject1Marks: 50, subject2Marks: 70, subject3Marks: 65 },
    { subject1Marks: 40, subject2Marks: 50, subject3Marks: 55 },
    { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
    { subject1Marks: 50, subject2Marks: 70, subject3Marks: 95 },
    { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
    { subject1Marks: 60, subject2Marks: 80, subject3Marks: 65 },
    { subject1Marks: 90, subject2Marks: 70, subject3Marks: 55 },
    { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 }, 
    ]
    let tot =[];
    for(let i=0;i<students.length;i++){
         tot.push(students[i].subject1Marks+students[i].subject2Marks+students[i].subject3Marks);
        
         
    }
    console.log(tot)
   
   



//Calculating Total Monthly Expenses
//You have an array of 10 objects, each representing monthly expenses with keys rent, groceries,
// and utilities. Write a program to calculate the total monthly expense for each object and store it in a 
//new array. Print the new array.
//Example:
//expenses = [
//{ rent: 1000, groceries: 500, utilities: 200 },
//{ rent: 800, groceries: 400, utilities: 150 },
//]
//Output:
//[ 1700, 1350 ]

let empty=[]
let expenses = [
    { rent: 1000, groceries: 500, utilities: 150 },
    { rent: 1100, groceries: 600, utilities: 150 },
    { rent: 1200, groceries: 700, utilities: 150 },
    { rent: 1300, groceries: 800, utilities: 150 },
    { rent: 1400, groceries: 900, utilities: 150 },
    { rent: 1500, groceries: 1000, utilities: 150 },
    { rent: 1600, groceries: 1100, utilities: 150 },
    { rent: 1700, groceries: 1200, utilities: 150 },
    { rent: 1800, groceries: 1300, utilities: 150 },
    { rent: 1900, groceries: 1400, utilities: 150 },
    { rent: 2000, groceries: 1500, utilities: 150 },
    ]
    for(let i=0;i<expenses.length;i++){
       empty.push(expenses[i].rent+expenses[i].groceries+expenses[i].utilities)
       
    }
    console.log(empty)










