function selectionsort(arr){

    for(let i=0;i<arr.length;i++){
        let min=i
        for(let j=0;j<arr.length;j++){
            if(arr[min]<arr[j]){
               
                min=j
            }
         
        }
        if(min!=i){
            let temp=arr[min]
           arr[min]=arr[j]
           arr[j]=temp

       }
    }
    console.log(arr)


}selectionsort([3,5,11,9,2,4,6,1])