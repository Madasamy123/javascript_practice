//Print the first n multiples of 3 for if n = 5,  print 3 6 9 12 15 in separate line

function multiplesOf3(n){

    let result=""

    for(let i=1;i<=n;i++){
        result+=3*i+" "
    }
    console.log(result)

}multiplesOf3(5)