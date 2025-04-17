function binearySearch(arr,target){

    let left=0;
    let right=arr.length-1;
    
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        
        if(arr[mid]===target){
            return  mid;
        }
        else if (arr[mid]<target){
            
            left=mid+1;
            
        }
        else{
            right=mid-1;
        }
    }
    
    return -1;
     
    }
    let result=binearySearch([1,6,3,9,44,98,12],98);
    console.log(result);