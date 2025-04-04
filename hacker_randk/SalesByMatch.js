function sockMerchant(n, ar) {
    // Write your code here
    
    let obj={}
    let count=0;
    
    for(let i=0;i<ar.length;i++){
        if(obj[ar[i]]){
            obj[ar[i]]++;
        }
        else{
            obj[ar[i]]=1;
        }
    }
    
    for(let check in obj){
        let div=Math.floor(obj[check]/2);
        count+=div;
    }
    
    return count;
}