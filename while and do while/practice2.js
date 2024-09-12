//1.Sum of Numbers Until a Condition Write a program that keeps asking the user for a number and 
//adds it to a sum until the user enters a number greater than 100. Use a while loop to keep track of the 
//input and sum.

function sumOfNumber(n){
    let i=1;
    let sum=0;
    while(i<=100){
       
        sum=sum+i;
        i++;
    }
    console.log(sum);
}
sumOfNumber(100)

