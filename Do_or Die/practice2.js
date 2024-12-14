//Given an array of integers, find the minimum in the array

function minarr(arr){

    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i]
        }
    }
    console.log(min)
}minarr([1,2,13,4,5,6])