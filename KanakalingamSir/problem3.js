function removeDuplicate(arr){
    
    let newarr= new Set();
    
    arr.map(item=>{
        newarr.add(item);
    })
       console.log(Array.from(newarr)) 
    
    
        
    }removeDuplicate([1,2,3,2,1,5,4])