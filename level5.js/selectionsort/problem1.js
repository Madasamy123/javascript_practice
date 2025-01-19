function selectsort(arr){

for(let i=0;i<arr.length-1;i++){
    let min=i;
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



}selectsort([29, 10, 14, 37, 11])

