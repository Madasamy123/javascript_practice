// Input: (["apple", "banana", "cherry", "date"], 'a')
// Output: [0, 1, 3]

function findlet(arr,target){
    let newarr=[];

    for(let i=0;i<arr.length;i++){
        let first=arr[i].split("");
       
        for(j=0;j<first.length;j++){
            if(first[j]==target){
                newarr.push(i);
                break;
            
              
            }
        }
       

    }
    console.log(newarr)
 


}findlet(["apple", "banana", "cherry", "date"],'a')