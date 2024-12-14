// function bupplesort(arr){

//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 [[arr[i],arr[j]]=[arr[j],arr[i]]]
//             }
//         }
//     }
//     console.log(arr)

// }bupplesort([3,9,6,1,45,2,7])

 function bupplesort(arr){
        for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
              
                let temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp

              
            }
           
         }
         
     }
    
     console.log(arr)




 }bupplesort([3,9,6,1,46,2,7])

