function marsExploration(s) {
    // Write your code here
    
    let expected="SOS";
    let count=0;
    
   for(let i=0;i<s.length;i++){
    if(s[i]!=expected[i%3]){
        count++;
    }
   
   }
  
console.log(count);

}marsExploration("SOSTOT")