function countMax(arr){
    
    let largeNum=arr[0];
    let minNum=arr[0]
    
    for(let i=0;i<arr.length;i++){
        if(largeNum<arr[i]){
            largeNum=arr[i]
        }
    }
   console.log(largeNum); 

    for(let i=0;i<arr.length;i++){
        if(minNum>arr[i]){
            minNum=arr[i]
        }
    }
    console.log(minNum)
    console.log(largeNum-minNum)
    
}countMax([1,2,4,3,1,4,7,3,7,2,7,6,11])