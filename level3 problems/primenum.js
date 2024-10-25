// function primeNum(num){
//     let result=true;
//     for(i=2;i<num;i++){
//        if(num%2==0){
//         result=false;
//         console.log("not primeNumber");
//         break;
//        }    
      
//     }
//     if(result){
//         console.log("primeNumber")
//        }    



// }primeNum(7)


function primeNum(n){
    let isPrime=true;
    if(n<=1){
        isPrime=false
    }
    else{
        for(let i=2;i<=Math.sqrt(n);i++){
            if(n%i==0){
                isPrime=false
            }
        }
    }
    if(isPrime){
        console.log("prime")
    }
    else{
        console.log("non-prime")
    }

}primeNum(4)