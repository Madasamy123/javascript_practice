 function pattern(n){
    for(let i=1;i<=n;i++){
        let str="";
        for(let j=n;j>i;j--){
            str+=" ";
           
        }
        for(let k=1;k<=i;k++){
            str+=k+" ";
        }
        console.log(str)
    }

   
 }pattern(5)

