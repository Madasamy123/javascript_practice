function reverseOne(arr){

    if(arr.length<1){
        return
      }
      let newarr=[]
      let lastelement=arr[arr.length-1];

      for(let i=0;i<arr.length-1;i++){
        newarr[i+1]=arr[i]
      }
newarr[0]=lastelement
console.log(newarr)

}reverseOne([1,2,3,4,5,6])

//function reverseOne(arr){
//   if(arr.length<1){
//     return    } 


// let newarr=[]
// let last=arr[arr.length-1]


// for(i=0;i<arr.length-1;i++){
//     newarr[i+1]=arr[i]
// }
// newarr[0]=last;

// console.log(newarr)
  
  
//  }reverseOne([1,2,3,4,5,6])


