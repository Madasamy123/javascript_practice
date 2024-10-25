//// 4. Write a function findMissingNumber(arr) that takes an array of consecutive numbers (with one missing) and returns the missing number.

function findMissingNumber(arr){
    for(let i=arr[0];i<arr[arr.length-1];i++){
        if(arr.includes(i)){

        }
        else{
            console.log(i)
        }
    }
   


}findMissingNumber([1, 2, 3, 5, 6])

