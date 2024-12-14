//Given an array of strings arr and another string s, check if s in present in arr

function arrstr(arr,target){
  let istrue=false
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
       istrue=true

    
        }
    }

    if(istrue){
        console.log(true)
    }
    else{
        console.log(false)
    }
    
}arrstr(["m","a","d","y"],"y")