// 6. Write a function findDuplicates(arr) that takes an array of numbers and returns a new array of all the numbers that appear more than once.
// findDuplicates([1, 2, 3, 4, 2, 5, 1]);  // Output: [1, 2]


function findDuplicates(arr){

    let newone=[]
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                newone.push(arr[i])
            }
        }

    }
    console.log(newone)

}findDuplicates([1, 2, 3, 4, 2, 5, 1])