function insertsort(arr){

    for(let i=1;i<arr.length;i++){
        let temp=arr[i]
        let j=i-1

        while(j>=0 && arr[j]>temp){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=temp
    }
    console.log(arr)


}insertsort([34,12,6,23,76,1,15])