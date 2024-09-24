// Find the sum of digits of a given positive integer.  Eg: num = 1569, output 21. Explanation 1 + 5 + 6 + 9

let num=1569;
let sum=0;
while(num>0){
    let a=num%10;
    sum=sum+a;
    num=parseInt(num/10);
    
}console.log(sum)






