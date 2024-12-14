
//Given an array of Integers, remove all the duplicates eg: [3, 4, 1, 5, 1, 9, 3] output [3, 4, 1, 5, 9]

function duplicateremove(arr){

    let newarr=[]
    for(let i=0;i<arr.length;i++){
       isDuplicate=false;
       for(let j=0;j<newarr.length;j++){
        if(arr[i]==arr[j]){
            isDuplicate=true
            break
        }

       }
       if(!isDuplicate){
        newarr.push(arr[i])
       }

        
     

    }
    console.log(newarr)

}duplicateremove([3, 4, 1, 5, 1, 9, 3,2])
