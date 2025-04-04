function pallindrome(Str){
  
    let newStr="";
     for(let i=Str.length-1;i>=0;i--){
         newStr+=Str[i]
     }
      if(newStr==Str){
             console.log("pallindrome");
         }
 
         else{
             console.log("Not pallindrome")
         }
 
 }pallindrome("level")