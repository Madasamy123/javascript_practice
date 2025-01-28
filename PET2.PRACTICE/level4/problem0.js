function factorial(n){
    let sum=0;
    let fact=1;
    for(let i=1;i<=n;i++){
        fact*=i
        sum+=fact
    }
    
    console.log(sum)
    
}factorial(5)