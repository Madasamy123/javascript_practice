
//Given an array of integers, find the maximum in the array

function maxarr(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    console.log(max)

}maxarr([1,2,13,4,5,6])

