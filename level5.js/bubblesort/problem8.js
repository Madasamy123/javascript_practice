function bubblesort(arr){

    let swapped;

    do{
        swapped=false;
        for(let i=0;i<arr.length;i++){
            if(arr[i+1]<arr[i]){
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

    
    

}console.log(bubblesort([23,54,65,21,89,234]))
