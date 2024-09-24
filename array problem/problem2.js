//Given a number of 7 digits, print the sum of the digits of the number.

let num=1234567;
// let sum=0;
// while(num>0){
//     let a=num%10;
//     sum+=a;
//     num=parseInt(num/10)
// }console.log(sum)
let sum=0;
while(num>0){
    let a=num%10;
    sum=sum+a;
    num=parseInt(num/10);
}console.log(sum)
