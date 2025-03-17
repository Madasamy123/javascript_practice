function camelcase(s) {
    // Write your code here
    
    let count=0;
    let first=s.split(/(?=[A-Z])/);
   
   for(let i=0;i<first.length;i++){
    count++;
   }
   
   return count;

}   