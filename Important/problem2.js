
//Print the sum of digits multiplied by 2'

let number=12;
let sum=1;
while(number>0){
    let a=number%10;
     let b =a*2
    sum=sum*b;
    number=parseInt(number/10);
  
    
    
}console.log(sum)