
//Print the sum of digits multiplied by 2'

// let number=12;
// let sum=1;
// while(number>0){
//     let a=number%10;
//      let b =a*2
//     sum=sum*b;
//     number=parseInt(number/10);
  
    
    
// }console.log(sum)

// let number=25;
// let sum=0;
// while(number>0){
//     let a=number%10;
//      let b=a*2;
//      sum=sum+b;
//      number=parseInt(number/10);
// }console.log(sum)

let number=15;
let sum=0;
let i=1;
while(i<number){
    if(i%2==0){
        sum=i+sum;
    }
    i++;
}console.log(sum)