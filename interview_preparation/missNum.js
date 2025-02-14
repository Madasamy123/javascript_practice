
function findMisNum(arr){
       let maxNum=arr[0];
       let minNum=arr[0];
       let totalcount=0;
       let secondTotal=[];
    
    for(let i=0;i<arr.length;i++){
        totalcount+=arr[i]
        if(arr[i]>maxNum){
            maxNum=arr[i]
        }

        else if(arr[i]<minNum){
            minNum=arr[i]
        }
    }
    
    for(let i=minNum;i<=maxNum;i++){
        secondTotal+=i;

    }
     
    let missingNum=secondTotal-totalcount;

    console.log(missingNum)
  

}findMisNum([1,2,3,5,7])