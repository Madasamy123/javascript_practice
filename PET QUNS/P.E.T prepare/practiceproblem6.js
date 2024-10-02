//11. Write a function printMultiplicationTable that takes a number n, range r and prints the 
//multiplication table for that number in reverse order.For example, if n =5 and r = 6;



let n=5;
let r=6;
for(let i=1;r>=i;r--){
    let mul=r*n;
    console.log(n+"*"+r+"="+mul)
}



//12. Write a program where a robot must complete 10 laps around a circuit. Use a while loop to count the laps 
//and display the lap number each time the robot completes one.

let i=1;

while(i<=10){
  
   console.log("robot completes"+"  "+i)
   i++;
}