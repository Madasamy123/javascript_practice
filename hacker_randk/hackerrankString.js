function hackerrankInString(s) {
    // Write your code here
    
    let target="hackerrank";
    let j=0;
    
    for(let i=0;i<s.length;i++){
        if(s[i]==target[j]){
            j++

           
            
           
        }
        if(j===target.length){
            return "YES";
        }
       
        
    }
    
    return "NO"
    
   
}console.log(hackerrankInString("hereiamstackerrank"))