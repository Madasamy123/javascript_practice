function intersecion(arr1,arr2){

    let c=[]

    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
           if(arr1[i]==arr2[j]){
            c.push(arr1[i])
           }
                
     
        }
    }
    console.log(c)

}intersecion([1,2,3,4,5],[3,4,5,6,7])