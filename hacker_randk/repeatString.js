function repeatedString(s, n) {
    // Write your code here
    
    let count=0;
    let count1=0
    
      for(let i=0;i<s.length;i++){
        if(s[i]=="a"){
            count++;
        }
      }
      
      let first=Math.floor(n/s.length);
      let second=n%s.length;
      
      let third=s.slice(0,second)
      
      for(let i=0;i<third.length;i++){
        if(third[i]=="a"){
            count1++;
        }
      }
      
      return (first*count)+count1;

}