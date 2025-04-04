function maxnum(arr){

    let maxNum=0;

    for(let i=0;i<arr.length;i++){
        if(maxNum<arr[i]){
            maxNum=arr[i]
        }

       
    }

    let ans=maxNum*arr.length;
    console.log(ans)


}maxnum([1,4,3,6,7,0])