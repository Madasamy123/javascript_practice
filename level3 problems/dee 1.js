function primeNum(n){
    let isPrime=true
    if(n<=1){
        isprime=false;
    }
    else{
        for(let i=2;i<=Math.sqrt(n);i++){
            if(n%i==0){
                isPrime=false;
            }
        }
    }
    if(isPrime){
        console.log("prime")
    }
    else{
        console.log("non-prime")
    }
 
}primeNum(13)



function gcd(a,b){

   let larger=0;
   let smaller=0;
   if(a>b){
    larger=a;
    smaller=b;
   }
   else if(a<b){
    larger=b;
    smaller=a;
   }
   while(smaller!==0){
    let temp=smaller;
     smaller=larger%smaller;
     larger=temp;
   }
   console.log(larger)

}gcd(60,42)


// function lcm(a,b){
//   let larger=0;
//   let smaller=0;
//   if(a>b){
//     larger=a;
//     smaller=b;
//   }
//   else if(a<b){
//     larger=b;
//     smaller=a;
//   }
//   let lcm=larger;
//   while(lcm%smaller!==0){
// lcm+=larger;
//   }
//   console.log(lcm)
// }lcm(3,9)



