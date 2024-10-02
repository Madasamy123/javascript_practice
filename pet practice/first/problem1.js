//Simple Sum of Two Numbers

//Write a function sum that takes two numbers as arguments and returns their sum.
// let sum=0;
// function number(a,b){
//     sum=a+b;
//     console.log(sum)

// }number(5,5)

//Sum of an Array of Numbers

//Write a function sumArray that takes an array of numbers as an argument and
// returns the sum of all the numbers in the array.
// let sum1=0;
// function sumArray(value){
//     for(let i=0;i<value.length;i++){
//       sum1=sum1+value[i]
     
//     }
//     console.log(sum1);
// }
// sumArray([1,2,3,4,5])

//Sum of Odd Numbers in an Array

//Write a function sumOddNumbers that takes an array of numbers and returns the sum of all odd numbers
// in the array.
// let sum=0;
// function sumOddNumbers(value){
//     for(let i=0;i<value.length;i++){
//         if(value[i]%2!==0){
//             sum=sum+value[i]
//         }
       
//     } return sum
    

// }
// let r=sumOddNumbers([13,15,7,10,14])
// console.log(r)

//Sum of Numbers from 1 to N
//integer
//Write a function sumToN that takes a positive integer n and returns the sum of all numbers from 1 to n.
// let sum=0;
// function sumToN(n){
// for(let i=0;i<=n;i++){
// sum=sum+i
// }
// return sum
// }
// let result=sumToN(5);
// console.log(result)

//Sum of Digits of a Number

//Write a function sumOfDigits that takes a positive  as input and returns the sum of its digits.
// sum=0;
// function value(num){
// while(num>0){
//     sum=sum+num%10
//     num=Math.floor(num/10)
// }
// return sum

// }
// let result=value(54321);
// console.log(result)

//Sum of Even Numbers Between Two Integers

//Write a function sumEvenInRange that takes two integers as input and returns the sum of all even numbers 
//between them (inclusive).
// let sum=0;
// function value(a,b){
//  for(let i=a;i<b;i++){
//     if(i%2==0){
//         sum=sum+i
//     }
   
//  }
//  return sum

// }
// console.log(value(1,10))


//Sum of Multiples of 3 and 5 Below a Number

//Write a function sumMultiples that takes an integer n and returns the sum of all numbers less than n that 
//are divisible by 3 or 5.
// let sum=0
// function number(value){
//     for(let i=0;i<value;i++){
//         if(i%3==0 || i%5==0){
//         sum=sum+i
//         }
      
//     }  return sum

// }
// console.log(number(10))



//Sum of First N Fibonacci Numbers

//Write a function sumFibonacci that takes a number n and returns the sum of the first n Fibonacci numbers.

// n1=0;n2=1;next=0;
// function fibonacci(value){
//     for(let i=1;i<=value;i++){
//         console.log(n1);
//         next=n1+n2;
//         n1=n2
//         n2=next;
      
//     }
   
    
  
// }fibonacci(10)

//Sum of Prime Numbers in an Array

//Write a function sumPrimeNumbers that takes an array of numbers and returns the sum of all prime numbers 
//in the array.

// let array=[11,24,37,27,19,82]
// let sum=0;

// for(let i=0;i<array.length;i++){
//     if(array[i]%1==0 && array[i]%2!==0 && array[i]%3!==0 && array[i]%4!==0 && array[i]%5!==0 && array[i]%7!==0){
//         sum=sum+array[i]
       
//     }
  
// } console.log(sum)

//Sum of Squares of Numbers in an Array

//Write a function sumOfSquares that takes an array of numbers and returns the sum of the squares of each number.

let numbers=[2,4,6,8,10]
let sum=0;
for(let i=0;i<numbers.length;i++){
    let a=numbers[i]**2
    sum+=a
}
console.log(sum)