function duplicate(arr){
    
    let newarr=[]
    
    for(let i=0;i<arr.length;i++){
        if(! newarr.includes(arr[i])){
            newarr.push(arr[i])
        }
    }
    console.log(newarr)
    
}duplicate([3,8, 4, 1, 5, 1, 9, 3,2])