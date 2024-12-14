function selectionsort(arr){

    for(let i=0;i<arr.length;i++){
        let min=i;
        for(let j=0;j<arr.length;j++){
            if(arr[min].age<arr[j].age){
                min=j
            }
           
        }
        if(min!==i){
            let temp=arr[min].age
            arr[min].age=arr[i].age
            arr[i].age=temp
        }
    }
    console.log(arr)


}selectionsort([{name: "Alice", age: 30}, {name: "Bob", age: 25}, {name: "Charlie", age: 35}, {name: "David", age: 22}])