function selectionsort(arr){

for(let i=0;i<arr.length;i++){
    let min=i;

    for(let j=i+1;j<arr.length;j++){
        if(arr[min]>arr[j]){
            min=j
        }
    }
    if(min!==i){
        [arr[min],arr[i]]=[arr[i],arr[min]]
    }
}
console.log(arr)

}selectionsort(["madasamy","bala","senthil","sudharsan","harish","yuva","pugal"])