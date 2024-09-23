//7. Write a function printEvenNumbers that takes a number n as a parameter and prints all even numbers
// from 1 to n using a while loop.
let i=1;
function printEvenNumbers(n){
    while(i<=n){
        if(i%2==0){
        console.log(i)
    }
        i++;
    }
}let result=printEvenNumbers(20)
console.log(result)


   