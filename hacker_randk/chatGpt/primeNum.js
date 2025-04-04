// Check if a Number is Prime
// Example: Input: 7, Output: True


function primeNum(n){

    if(n<=1){
        return false;
    }
    
    if(n==2){
        return true;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false;
        }
      
    }

    return true;

}console.log(primeNum(1));