
function checkString(s1,s2){

    let count=0;
      for(let i=0;i<s1.length-1;i++){
         let newStr=s1[i]+s1[i+1]
         if(newStr==s2){
             count++
         }
      }
      console.log(count)
        
    }checkString("this is string is","is")