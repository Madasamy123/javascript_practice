function lcm(a,b){
    let larger=0;
    let smaller=0;
    if(a>b){
        larger=a;
        smaller=b;
    }
    else if(a<b){
        larger=b;
        smaller=a
    }
    let lcm=larger;
    while(lcm%smaller!==0){
        lcm+=larger
    }
    console.log(lcm)

}lcm(16,9)


function gcd(a,b){
    while(b!==0){
        let temp=b;
        b=a%b;
        a=temp;
    }
    console.log(a)

}gcd(10,16)



// function primeNUm(n){
//     let isPrime=true;
//     if(n<=1){
//         isPrime=false
//     }
//     else{
//         for(let i=2;i<Math.sqrt(n);i++){
//             if(n%i==0){
//                 isPrime=false
//             }
//         }
//     }
//     if(isPrime){
//         console.log("prime")
//     }
// else{
//     console.log("non-prime")
// }
// }primeNUm(7)

