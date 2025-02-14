function insertsort(arr){

    for(let i=1;i<arr.length;i++){
        let temp=arr[i]          //23
        let j=i-1;       // 0
       

        while(j>=0 && arr[j]>temp){     //76 >23
            
            arr[j+1]=arr[j]   //  [76,76,12,73,45,4]

            j--                //  -1
        }
      
        arr[j+1]=temp           //  arr[j+1]=0  arr[0]=23
    }
    console.log(arr)

}insertsort([76,23,12,73,45,4])