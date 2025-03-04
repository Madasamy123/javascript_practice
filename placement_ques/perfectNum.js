function perfectNum(num){
      let divNum=0;
    for(let i=1;i<num;i++){
        if(num%i==0){
            divNum+=i;
        }
    }

 
    if(divNum==num){
        return true;
    }
    else{
        return false;
    }

}console.log(perfectNum(28))