function beautifulDays(i, j, k) {
    // Write your code here
    
   let count=0;
   for(let s=i;s<=j;s++){
    let reversed=Number(s.toString().split("").reverse().join(""));
    if(Math.abs(s-reversed)%k==0){
        count++;
    }
    
   }
   console.log(count);

  
}beautifulDays(20,23,6)
