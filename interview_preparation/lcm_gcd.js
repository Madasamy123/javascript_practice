//lcm and gcd

function LcmandGcd(a,b){
   let gcd;
    if(a==0){
         gcd=b;
    }
    else if(b==0){
         gcd=a
    }
     let larger=0;
    if(a>b){
        larger=a
    }
    else if(a<b){
        larger=b
    }

    for(let i=0;i<=larger ; i++){
        if(a%i==0 && b%i==0){
            gcd=i
        }
    }

    let mul=a*b;
    let lcm=mul/gcd;

    console.log("gcd:"+gcd);
    console.log("lcm:"+lcm)


}LcmandGcd(12,12)