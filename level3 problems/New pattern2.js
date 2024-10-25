function pattern(n){
for(let i=1;i<=n;i++){
    let str=""
    for(let j=n;j>=i;j--){
        str+="* "
    }
    console.log(str)
}

}pattern(5)