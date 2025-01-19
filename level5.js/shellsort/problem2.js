function shellsort(arr){

    let len=arr.length;
    let mid=Math.floor(len/2)

 while(mid>0){

  

    for(let i=mid;i<len;i++){
        let temp=arr[i]
        let j=i
    
        while(j>=mid && arr[j-mid]>temp){
            arr[j]=arr[j-mid]
            j=j-mid
        }
        arr[j]=temp
      

    }
   
    mid=Math.floor(mid/2)
   
    
 }
 console.log(arr)

}shellsort([43,23,14,56,2,12,27])


