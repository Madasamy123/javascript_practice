function removedup(arr){

    let newarr=[]
    for(let i=0;i<arr.length;i++){
        isDuplicate=false;
        for(let j=0;j<newarr.length;j++){
            if(arr[i]==arr[j]){
                isDuplicate=true;
                break;

            }
        }
        if(!isDuplicate){
            newarr.push(arr[i])
        }

    }
    console.log(newarr)

}removedup([1,4,1,3,2,3,6,3,4,1,5])