// pubble sort

function publesort(arr){
let swapped;

do{
    swapped=false;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            let swap=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=swap
            // [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
            swapped=true
        }
    }
    
}


while(swapped)
    console.log(arr)


}publesort([5,4,3,1,11])


//  

function array(arr){

    


}arr([13,24,56,23,20])