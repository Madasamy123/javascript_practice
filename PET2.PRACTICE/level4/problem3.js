// 4. Given 2 Numbers, find the GCD between the two numbers. 


function gcd(a,b){

    let larger=0;
    let smaller=0;

    if(a>b){
        larger=a;
        smaller=b
        
    }

    else{
        larger=b;
        smaller=a

    }

    while(smaller !==0){
        let temp=smaller;
        smaller=larger%smaller;
        larger=temp
    }
   console.log(larger)
}gcd(10,0)

