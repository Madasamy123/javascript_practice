// Bubble Sort
// Write a program to sort an array of integers using the Bubble Sort algorithm.
// Input: arr = [64, 34, 25, 12, 22, 11, 90]
// Output: [11, 12, 22, 25, 34, 64, 90]


function bubblesort(arr){

    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
           
        }
      
    }
    console.log(arr.join(" "))

}bubblesort([64, 34, 25, 12, 22, 11, 90])