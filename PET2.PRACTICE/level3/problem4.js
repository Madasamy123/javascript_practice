//Print the first n odd numbers, for eg if n = 5, print 1 3 5 7 9

function oddNumbers(n){
    let result=""
    for(let i=1;i<=n;i++){
        result+=2*i-1+" "
     
    }
    console.log(result)

}oddNumbers(5)