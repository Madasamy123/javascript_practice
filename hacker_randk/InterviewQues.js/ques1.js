
function uniqNum(arr){

 let obj={}

 for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]){
        obj[arr[i]]++;
    }
    else{
        obj[arr[i]]=1
    }
 }

for(let key in obj){
    if(obj[key]==1){
        console.log(key)
    }
}

}uniqNum([5,3,2,3,2])