function bupplesort(arr){
    let swaped;
    do{
        swaped=false;
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
                swaped=true;
            }
        }
    }
    while(swaped){
        return arr;

    }
  

}
console.log(bupplesort([7,3,2,6,1,4,5]));