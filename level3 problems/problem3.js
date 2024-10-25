//. Write a function secondLargest(arr) that takes an array of numbers and returns the second-largest number in the array.

function secondLargest(arr){
   let largest=0;
   let secondLargest=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i]

    }
  }
 for(let i=0;i<arr.length;i++){
    if(arr[i]>secondLargest && arr[i]!==largest){
        secondLargest=arr[i]
    }
 }
 console.log(secondLargest)

}secondLargest([5, 1, 9, 13, 7]);
