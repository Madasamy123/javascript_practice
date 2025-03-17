function extraLongFactorials(n) {
    // Write your code here
    let fact=BigInt(1);  // BigInt---> very large integer
  
    for(let i=BigInt(n);i>=1;i--){
      fact=fact*i;
    
   
    }
    
  console.log(fact.toString());
//   return fact;
 
   
}extraLongFactorials(25)
