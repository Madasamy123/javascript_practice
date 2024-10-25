function binarysearch(arr,target){

   for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
   }
 

   let first=0;
   let last=arr.length-1;
   let mid=Math.floor((first+last)/2)
   if(arr[mid]==target){
       console.log(arr[mid])
   }
   else if(arr[mid]>tartet){
    right-1;


   }
   else{
    left+1
    console.log(mid)
   }



}binarysearch([1,5,2,6,8,4,9,3],6)