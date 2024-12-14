function selectionsort(arr){

    for(let i=0;i<arr.length-1;i++){
        let min=i

        for(let j=i+1;j<arr.length;j++){
            if(arr[min]>arr[j]){
                min=j
            }
         
        }
        console.log(arr.join(" "))

        if(min!==i){
           [arr[min],arr[i]]=[arr[i],[arr[min]]]
        }
    }
    console.log(arr.join(" "))


}selectionsort([4,5,1,3,7])