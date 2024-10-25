function pattern(n){
for(let i=1;i<=n;i++){
    let str=""
    for(let j=n;j>i;j--){
        str+=" ";
       
    }
    for(let k=1;k<=i;k++){
        str+=i+" "
    }
    console.log(str)
   
}
for(let i=1;i<=n;i++){
    let str="";
    for(let j=1;j<=i;j++){
        str+=" ";
    }
    for(let k=n;k>i;k--){
        str+=n-i+" "
    }
    console.log(str)
}





}pattern(5)