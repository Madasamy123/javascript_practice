function primeNum(N){

    if( N<=1){
        return false;
    }

  for(let i=2;i<Math.sqrt(N);i++){
    if(N%i==0){
        return false
    }
   
  }
  return true

}console.log(primeNum(53))