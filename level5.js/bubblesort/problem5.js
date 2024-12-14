//Write a Bubble Sort algorithm to sort the following list of strings in alphabetical order:
  //  ["apple", "banana", "orange", "grape", "kiwi"])

    function bubblesort(arr){

        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
            }
        }
        console.log(arr)

    }bubblesort(["apple", "banana", "orange", "grape", "kiwi"])