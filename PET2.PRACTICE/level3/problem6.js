//Print the sum for first N multiples of 5, if n = 3 then print 5 + 10 + 15 = 30

function multiplesOf5(n){

    let sum=0;

    for(let i=1;i<=n;i++){
         sum+=i*5
    }
    console.log(sum)

}multiplesOf5(3)

