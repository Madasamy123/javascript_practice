function selectionsort(arr){

    for(let i=0;i<arr.length;i++){
        let min=i;
        for(let j=0;j<arr.length;j++){
            if(arr[min]<arr[j]){
                min=j
            }
           
        }
        if(min!==i){
            let temp=arr[min]
            arr[min]=arr[i]
            arr[i]=temp
        }
    }
    console.log(arr)

}selectionsort(["madasamy","bala","senthil","sudharsan","harish","yuva","pugal"])