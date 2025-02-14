/// arr = [2,3,4,5,6,2,12,13,14,15,16,2]

function findmax(arr){
    
    let count2=0
    let a=0
    for(let i=0;i<arr.length;i++){
        let count1=0;
        for(let j=i+1;j<arr.length;j++){
            
            if(arr[i]==arr[j]){
               count1++
               
            }
          
        }
      if(count1>count2){
        count2=count1
        a=arr[i]
      }
   
      

     
    }
    console.log(a)
}findmax([1,2,5,4,5,6,7,8,1,3,3,3,5,5,5,3,3,3])