// Find the Sum of first n even numbers sumOfNEven(5) prints 30 (which is 2 + 4 + 6 + 8 + 10)

function sumOfNEven(n){
    let sum=0;
    for(let i=0;i<=n;i++){
       sum+=i*2


    }
    console.log(sum)
}sumOfNEven(5)