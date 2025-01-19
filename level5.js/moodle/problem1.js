// let a = aabbbcccc;
function countStr(arr){
    
    let str="";
    let count=1;
    
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]==arr[i-1]){
            count++
        }
        else{
            str+=arr[i]+count;
            count=1;
        }
        
    }
    console.log(str)
    
    
}countStr("aabbbcccc")