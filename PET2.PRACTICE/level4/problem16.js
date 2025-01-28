function countIndex(arr,target){
    let newarr=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            newarr.push(i)
        }
    }
   
   let first=newarr[0];
   let last=newarr[newarr.length-1];
   
   console.log(`firstIndex:${first},lastIndex:${last}`)
    
    
    
}countIndex([5, 2, 3, 5, 7, 5, 8], 5)