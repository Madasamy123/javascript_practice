
// output[5,1,2,3,4]

// function circularShiftRight(arr){

   
//     let first=arr.pop()
//    arr.unshift(first)
// console.log(arr)


// }circularShiftRight([1, 2, 3, 4, 5])
// circularShiftRight([45, 21, 15, 19])

function circularShiftRight(arr){
let newarr=[]
    for(let i=0;i<arr.length;i++){
      let newindex=(i+4)%arr.length
      newarr[newindex]=arr[i]
    }
    console.log(newarr)




}circularShiftRight([1, 2, 3, 4, 5])
circularShiftRight([45, 21, 15, 19])