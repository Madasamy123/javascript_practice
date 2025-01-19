function numbers(arr,n){
    isDuplicate=false

    for(let i=0;i<arr.length;i++){
        if(n==arr[i]){
            isDuplicate=true
            console.log("Duplicate element found")
            return
        }

    }
    if(!isDuplicate){
        arr.push(n)
    }
    console.log(arr)


}numbers([5, 10, 3, 11, 18],6)


