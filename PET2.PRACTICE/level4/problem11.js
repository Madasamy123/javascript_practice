function countMax(arr){
    
    let largeNum=0;
    let count=0
    
    for(let i=0;i<arr.length;i++){
        if(largeNum<arr[i]){
            largeNum=arr[i]
        }
    }
    for(let i=0;i<arr.length;i++){
        if(largeNum==arr[i]){
            count++
        }
    }
    console.log(`largeNum =${largeNum}`,`count =${count}`)
    
}countMax([1,2,4,3,1,4,7,3,7,2,7])