function fibonacci(n) {

    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    else{
        return fibonacci(n-1)+fibonacci(n-2)
    }
    
    let fibbi=0;
    for(let i=0;i<n;i++){
        fibbi+=i;
     
    }
    
    return fibbi;
    
    }
    console.log(fibonacci(5))