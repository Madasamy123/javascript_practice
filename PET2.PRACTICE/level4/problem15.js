function countOddEven(arr){
    let oddcount=0;
    let evencount=0
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            evencount++
        }
        else{
            oddcount++
        }
        
    }
    
    console.log(`{odd:${oddcount},even: ${evencount}}`)
    
}countOddEven([1,2,3,4,5,6])