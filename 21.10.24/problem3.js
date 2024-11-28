function pattern(n){
    for(let i=1;i<=n;i++){
        let str="";
        for(let j=n;j>i;j--){
            str+=" ";
           
         
        }
          for(let k=1;k<=i;k++){
           if(k%2==1){
            str+="*"
           }
        }
         console.log(str)
       
       
    }
   
 
  
}pattern(9)