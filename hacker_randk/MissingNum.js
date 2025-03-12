
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

    
    for(let j=0;j<brr.length;j++){
        if(obj2[brr[j]]){
            obj2[brr[j]]++;
        }
        else{
            obj2[brr[j]]=1
        }
        
    }

    // console.log(obj1)
    // console.log(obj2)
   

    let missingnum=[]

    for(let ans of obj2){
        if(obj2[brr[j]]!=obj1[arr[i]]){
            missingNum.push(obj2[brr[j]])
        }

    }

    console.log(missingNum)

}missingNum([203 ,204 ,205 ,206 ,207 ,208 ,203 ,204 ,205 ,206],[203 ,204 ,204 ,205 ,206 ,207 ,205 ,208 ,203 ,206 ,205 ,206 ,204])