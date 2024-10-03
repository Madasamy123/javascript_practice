////1. Write a function sumNumbers that takes a number n as a parameter and returns the sum of all numbers
// from 1 to n using a while loop.
let i=1;
let sum=0;
function sumNumbers(n){
  while(i<=n){
      sum=sum+i;
      i++;

  }return sum
}console.log(sumNumbers(10))


//2. Write a function calculateFactorial that takes a number n as a parameter and returns the factorial of that 
//number using a while loop.
function calculateFactorial(n){
let a=1;
let fact=1;
    while(a<=n){
        fact *= a;
        a++;
    }
    return fact;
}
console.log(calculateFactorial(5));