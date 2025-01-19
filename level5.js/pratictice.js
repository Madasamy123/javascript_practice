function Selectionsort(arr){

  let len=arr.length;
  let mid=Math.floor(len/2);


  while(mid>0){
  for(let i=mid;i<arr.length;i++){
      let temp=arr[i]
           let j=i;
    while(j>=mid && arr[j-mid]>temp){
        arr[j]=arr[j-mid]
        j=j-mid

    }
    arr[j]=temp

  }
  mid=Math.floor(mid/2)

  }
  console.log(arr)

}Selectionsort([4,1,7,2,9,3,17,5,8])