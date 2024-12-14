//Write a function countOccurrences(arr, value) that iterates over an array and counts how many times the given value appears.

function countnum(arr,target){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            count++
        }
    }
    console.log(count)

}countnum([1,2,2,3,2,4,5],5)