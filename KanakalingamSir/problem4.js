function findduplicate(arr,target){
    
    let first= new Set(arr);
    
    // for(let i=0;i<arr.length;i++){
      
      if(first.has(target)){
          console.log("True")
        
      }
      else{
          console.log("false")
      }
       
    // }

    
    
}findduplicate([1,2,3,1,4,2,5,3],5)