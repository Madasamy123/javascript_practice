let i=1;
let n=5;
let sum=1;
function calculateFactorial(n){
    while(i<=n){
        sum=sum*i
        i++;
    }
    return sum

}
let result= calculateFactorial(n)
console.log(result);

