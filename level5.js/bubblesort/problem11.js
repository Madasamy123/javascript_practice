function bubblesort(arr){
    
    let swapped;
    
    do{
        swapped=false;
        
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
            let temp=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
            swapped=true;
        }
     
    }
       console.log(arr)
    
    }
      while(swapped){
            console.log(arr)
        }
        
      
    
    
}bubblesort([1,4,3,7,2,8,5])