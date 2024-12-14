

// function selectionSort(arr) {

//     // Enter code here
    
//     for(let i=0;i<arr.length-1;i++){
//         let min=i;
       
//          for(let j=0;j<arr.length;j++){
          
//              if(arr[min]<arr[j]){
//                 min=j
//             }
//             if(min!=i){
              
//                 let temp=arr[min]
//                 arr[min]=arr[j]
//                 arr[j]=temp
//             }  
//         } 
//     }
//     console.log(arr.join(" ")) 
// }selectionSort([4,5,1,3,7])

function selectionSort(arr) {
    for(let i=0;i<arr.length-1;i++){
        let min=i;
        for(let j=0;j<arr.length;j++){
            if(arr[min]<arr[j]){
                min=j
    
            }
           
            if(min!==i){
                [[arr[min],arr[j]]=[arr[j],arr[min]]]
            }
           
        }
        console.log(arr.join(" "))
    }
    console.log(arr.join(" "))
       
       
    }selectionSort([4,5,1,3,7])