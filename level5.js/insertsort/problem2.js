function insertsort(arr){

    for(let i=0;i<arr.length;i++){
        let temp=arr[i]
        let j=i-1
       

        while(j>=0 && arr[j]>temp){
            
            arr[j+1]=arr[j]
            j--
        }
      
        arr[j+1]=temp
    }
    console.log(arr)

}insertsort([76,23,12,73,45,4])