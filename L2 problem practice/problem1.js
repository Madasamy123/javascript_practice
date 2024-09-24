//1. Sum of Even Numbers Using a Loop and Conditional

//Write a program that uses a for loop to iterate through the numbers from 1 to 20. 
//If the number is even, add it to a total sum. At the end of the loop, print the total sum of all even numbers between 1 and 20.
function evenNum(n){
let sum=0;

for(let i=0;i<=n;i++){
    if(i%2==0){
    sum=sum+i;
}
}
console.log(sum);
}evenNum(20)


//2. Multiples of 3

//Print the first n multiples of 3, print 3 6 9 12 15 ... on separate lines. 
//The program should work for different values of n.
function multiples(n){
    for(let i=1;i<n;i++){
        let a=i*3
        console.log(a)
    }
}multiples(10)

//3. DL Method Winner

//You are designing a program to determine the outcome 
//of a cricket match based on the Duckworth-Lewis 
//method due to rain interruptions. 
//Declare variables teamScore, targetScore, and oversLeft.
// If the teamScore is greater than or equal to 
//targetScore, 
//print "Team wins by DL method" 
//If teamScore is less than targetScore 

//but oversLeft is greater than 0, 
//print "Match to be continued" 
//If teamScore is less than targetScore and 
//oversLeft is 0, 
//print "Team loses by DL method"

function score(teamScore,targetScore, oversLeft){
    if(teamScore>=targetScore){
        console.log("Team wins by DL method");
    }
    else if(teamScore<targetScore && oversLeft>0){
        console.log("Match to be continued");
    }
    else{
        console.log("Team loses by DL method")
    }
    
}
score(50,60,28)


