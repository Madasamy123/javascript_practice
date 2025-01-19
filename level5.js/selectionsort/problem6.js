// Selection Sort
// Implement the Selection Sort algorithm to sort a given array in ascending order.
// Input: arr = [29, 10, 14, 37, 14]
// Output: [10, 14, 14, 29, 37]

function selectionsort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[min]>arr[j]){
                min=j
            }

        }

        if(min!==i){
            [arr[min],arr[i]]=[arr[i],arr[min]]
        }
    }
    console.log(arr)

}selectionsort([29, 10, 14, 37, 11])

