
lcm
function lcm(a,b){
    let larger=0;
    let smaller=0;
    if(a>b){
        larger=a;
        smaller=b
    }
    else if(a<b){
        larger=b;
        smaller=a;
    }
    let lcm=larger
    while(lcm%smaller!==0){
        lcm+=larger
    }
    console.log(lcm)

}lcm(9,6)

//Gcd

// function gcd(a,b){
//     while(a!==0){
//         let temp=a
//         a= b%a;
//         b=temp

//     }
//     console.log(b)

// }gcd(45,60)


// primeNUm

