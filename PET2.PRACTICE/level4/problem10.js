function duplicate(n){
    let newarr=[]

for(let i=0;i<n.length;i++){
    let isduplicat=false;
    for(let j=0;j<newarr.length;j++){
        if(n[i]==newarr[j]){
            isduplicat=true;
            break;
        }
        
    }if(!isduplicat){
        newarr.push(n[i])
    }
}
console.log(newarr)

    

    
}duplicate([6,1,2,1,3,2,4,5,4])