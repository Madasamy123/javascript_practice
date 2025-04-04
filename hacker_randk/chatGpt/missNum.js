
// function missNum(arr){
//     let maxNum=0;
//     let totalsum=0;
//     let misssum=0;
//     for(let i=0;i<arr.length;i++){
//         misssum+=arr[i];
//         if(maxNum<arr[i]){
//             maxNum=arr[i];
//         }
//    }

//     for(let i=1;i<=maxNum;i++){
//      totalsum+=i;
//     }

//     let ans=totalsum-misssum;
//     console.log(ans)

   
   
// }missNum([1,2,4,5])



function missNum(nums) {
    let n = nums.length + 1; // Since one number is missing
    let d = (n * (n + 1)) / 2; // Correct formula for sum of first N natural numbers

    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]; // Sum of given array
    }

    let missingNumber = d - sum; // The missing number
    console.log(missingNumber);
}missNum([1,2,3,4,6])


