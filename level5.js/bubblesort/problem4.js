//Write a Bubble Sort algorithm to sort the following list of integers in ascending order:
//[45, 22, 78, 34, 89, 12, 56]

function bubblesort(arr){
    let swapped;

    do{
     swapped=false
     for(let i=0;i<arr.length;i++){
         if(arr[i]>arr[i+1]){
             let temp=arr[i]
             arr[i]=arr[i+1]
             arr[i+1]=temp
             swapped=true
         }
     }
    }

    while(swapped){
     return arr
    }


}console.log(bubblesort([45, 22, 78, 34, 89, 12, 56]))



//////////////

function bubblesort(arr){
    let swapscount=0;
    
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp;
                swapscount++
                
                
            }
            
        }
          console.log(arr)
          
             
      
    }
  
     console.log(swapscount)
    
}bubblesort([5, 3, 2, 1])