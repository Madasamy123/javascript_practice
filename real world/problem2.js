// *Simple Interest Calculation*
//Create an array that holds the principal, rate of interest, and time in years for a loan. Write a program to calculate the simple interest using the formula SI = (P * R * T) / 100 and print the result.
let si=[1000,5,2]
let a=1;
for(i=0;i<si.length;i++){
    let t=si[i];
    a*=t;
}
let s=a/100;
console.log(s);
