function duplicate(n){
    let newarr=[]
   
  for(let i=0;i<n.length;i++){
     
     if(!newarr.includes(n[i])){
         newarr.push(n[i])
     }
  }
  console.log(newarr)
    

    
}duplicate([1,2,1,3,2,4,5,4])