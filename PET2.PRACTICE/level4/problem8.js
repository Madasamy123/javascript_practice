function duplicate(n){
    let newarr=[]
   
  for(let i=0;i<n.length;i++){
      for(let j=i+1;j<n.length;j++){
          if(n[i]==n[j]){
              newarr.push(n[i])
          }
      }
  }
  console.log(newarr)
    

    
}duplicate([1,2,1,3,2,4,5,4])