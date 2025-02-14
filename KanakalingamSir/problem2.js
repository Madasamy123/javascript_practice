function removeDuplicate(arr){
    
let newarr= new Set();

for(let i=0;i<arr.length;i++){
    newarr.add(arr[i])
}
console.log(Array.from(newarr))
    
}removeDuplicate([1,2,3,2,1,5,4])