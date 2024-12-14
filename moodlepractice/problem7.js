function binarysearch(arr,target){
    arr.sort((a,b)=>a-b)

    let left=0;
    let right=arr.length-1
    
    while(left<=right){
        let mid=Math.floor((left+right)/2)

        if(arr[mid]==target){
            return mid
        }
        else if(arr[mid ]<target){
            left=mid+1
        }
        else{
            right=mid-1
        }
        return-1
    }
    



}console.log(binarysearch([1,3,4,5,7,8,10,1,5,12,1,21],21))