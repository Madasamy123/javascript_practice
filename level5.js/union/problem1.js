function union(arr1,arr2){

   for(let i=0;i<arr2.length;i++){
    isDuplicate=false;
    for(let j=0;j<arr1.length;j++){
        if(arr1[j]===arr2[i]){
            isDuplicate=true;
            break
        }
    }
    if(!isDuplicate){
        arr1.push(arr2[i])
    }
   }
   console.log(arr1)


}union([1,2,3,4,5],[3,4,5,6,7])