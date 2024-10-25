//5. Write a function findCommon(arr1, arr2) that takes two arrays and returns an array of common elements between the two.
// findCommon([1, 2, 3, 4], [3, 4, 5, 6]); // Output: [3, 4]

function findCommon(arr1,arr2){
    let newone=[]
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
         if(arr1[i]==arr2[j]){
            newone.push(arr1[i])
         }
        }
    }
    console.log(newone)

}findCommon([1, 2, 3, 4], [3, 4, 5, 6])