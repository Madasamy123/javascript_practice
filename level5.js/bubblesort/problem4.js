//Write a Bubble Sort algorithm to sort the following list of integers in ascending order:
//[45, 22, 78, 34, 89, 12, 56]

function bubblesort(arr){
    let swapped;

    do{
     swapped=false
     for(let i=0;i<arr.length;i++){
         if(arr[i]>arr[i+1]){
             let temp=arr[i]
             arr[i]=arr[i+1]
             arr[i+1]=temp
             swapped=true
         }
     }
    }

    while(swapped){
     return arr
    }


}console.log(bubblesort([45, 22, 78, 34, 89, 12, 56]))