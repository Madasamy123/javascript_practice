//1. *Average of Scores*
//Write a program to create an array of 5 exam scores. Calculate and print the average of the score

let scores=[10,30,50,70,90]
let sum=0;
let a=0;
for(i=0;i<scores.length;i++){
    sum=sum+scores[i];
    a=sum/5;

}console.log(a)
