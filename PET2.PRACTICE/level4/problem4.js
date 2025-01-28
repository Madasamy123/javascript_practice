function lcm(a,b){
     let larger=0;
     let smaller=0;
    if(a>b){
        larger=a;
        smaller=b;

    }

    else if(a<b){
        larger=b;
        smaller=a;

    }

    let lcm=larger;

    while(lcm%smaller !==0){
       
        lcm+=larger;
    }
   console.log(lcm)
}lcm(18,1)