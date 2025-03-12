
function missingNum(arr,brr){

    let obj1={};
    let obj2={};

    for(let i=0;i<arr.length;i++){
        if(obj1[arr[i]]){
            obj1[arr[i]]++;
        }
        else{
            obj1[arr[i]]=1
        }
        
    }

    
    for(let j=0;j<arr.length;j++){
        if(obj2[arr[j]]){
            obj2[arr[j]]++;
        }
        else{
            obj2[arr[j]]=1
        }
        
    }

    console.log(obj1)
    console.log(obj2)

}missingNum([203 ,204 ,205 ,206 ,207 ,208 ,203 ,204 ,205 ,206],[203 ,204 ,204 ,205 ,206 ,207 ,205 ,208 ,203 ,206 ,205 ,206 ,204])