function selectsort(arr){

for(let i=0;i<arr.length;i++){
    let min=i;
   
    for(let j=i+1;j<arr.length;j++){
        if(arr[min]>arr[j]){
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



}selectsort([9,62,6,3,23,16])